"use client";

import { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { MyCollections } from "../../types/collections";

export const Input = (props: {
  element: MyCollections["form_components"];
  hookForm: UseFormReturn<FieldValues, any>;
}) => {
  const { element, hookForm } = props;
  const { register } = hookForm;
  return (
    <input
      required={element.required || false}
      {...element.component_props}
      {...register(element.key!, {
        required: element.required || false,
      })}
    />
  );
};