"use client";

import { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { MyCollections } from "../../types/collections";

export const Textarea = (props: {
  element: MyCollections["form_components"];
  hookForm: UseFormReturn<FieldValues, any>;
}) => {
  const { element, hookForm } = props;
  const { register } = hookForm;

  return (
    <textarea
      required={element.required || false}
      {...element.component_props}
      {...register(element.key!, {
        required: element.required || false,
      })}
    />
  );
};