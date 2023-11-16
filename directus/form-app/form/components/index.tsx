'use client';

import React from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { MyCollections } from "../../types/collections";
import { Input } from "./input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

export const RenderDirectusComponent = (props: {
  element: MyCollections["form_components"];
  hookForm: UseFormReturn<FieldValues, any>;
}) => {
  const { element, hookForm } = props;
  switch (element.type) {
    case "input":
      return <Input element={element} hookForm={hookForm} />;
    case "textarea":
      return <Textarea element={element} hookForm={hookForm} />;
    case "select":
      return <Select element={element} hookForm={hookForm} />;
    default:
      return <React.Fragment />;
  }
};