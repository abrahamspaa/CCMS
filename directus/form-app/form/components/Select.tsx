"use client";

import { FieldValues, UseFormReturn } from "react-hook-form";
import { MyCollections } from "../../types/collections";

export const Select = (props: {
  element: MyCollections["form_components"];
  hookForm: UseFormReturn<FieldValues, any>;
}) => {
  const { element, hookForm } = props;
  const { register } = hookForm;
  return (
    <select
      required={element.required || false}
      {...element.component_props}
      {...register(element.key!, {
        required: element.required || false,
      })}
    >
      {element.component_props?.placeholder && (
        <option value="" hidden selected disabled>
          {element.component_props.placeholder}
        </option>
      )}
      {(element.choices as { label: string; value: any }[])?.map((res, key) => (
        <option value={res.value} key={`select-${element.key}-option-${key}`}>
          {res.label}
        </option>
      ))}
    </select>
  );
};