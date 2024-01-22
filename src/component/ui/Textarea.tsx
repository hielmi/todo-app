import React from "react";
import { Label, Textarea } from "flowbite-react";

type propsTypes = {
  id: string;
  placeholder: string;
  required?: boolean;
  rows: number;
  value: string;
  label: string;
  onchange: any;
};

const TextArea = (props: propsTypes) => {
  const {
    id,
    placeholder,
    required = false,
    rows,
    value,
    label,
    onchange,
  } = props;
  return (
    <div className="mb-6">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <Textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={onchange}
        className="p-2"
      />
    </div>
  );
};

export default TextArea;
