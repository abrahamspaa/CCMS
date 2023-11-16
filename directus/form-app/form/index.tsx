"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { MyCollections } from "../types/collections";
import { directus } from "../lib/directus";
// import { Button } from "../UI/Button";
import { RenderDirectusComponent } from "./components";

const RenderSuccessMessage = (props: { message: string }) => {
  return <p>{props.message}</p>;
};

export const RenderDirectusForm = (props: {
  form: MyCollections["forms"];
}) => {
  const router = useRouter();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    async (elements: Record<string, any>) =>
      await directus.items("form_submits").createOne({
        form: props.form.id,
        elements,
      }),
    {
      onSuccess: () => {
        if (props.form.on_success === "redirect") {
          router.push(props.form.on_success_redirect_link || "/");
        }
      },
    }
  );
  const hookForm = useForm();

  const onSubmit = (data: Record<string, any>) => {
    mutate(data);
  };

  return isSuccess && props.form.on_success === "show_message" ? (
    <RenderSuccessMessage
      message={props.form.on_success_message || "Thanks for submitting!"}
    />
  ) : (
    <form
      className="grid grid-cols-12 gap-5"
      onSubmit={hookForm.handleSubmit(onSubmit)}
    >
      <p className="col-span-12 text-center text-xl font-bold">
        {props.form.name}
      </p>
      {(props.form?.elements as ApiCollections["form_components"][])?.map(
        (res) => (
          <div
            key={`directusComponent-${res}`}
            className={twMerge(`col-span-12`, `md:col-span-${res.col_span}`)}
          >
            <p className="mb-1">{res.label}</p>
            <RenderDirectusComponent element={res} hookForm={hookForm} />
          </div>
        )
      )}
      <div className="col-span-12 mx-auto">
        <Button type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};