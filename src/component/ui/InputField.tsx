import React from "react";
import { Label, TextInput } from "flowbite-react";
type propTypes = {
  type: string;
  placeholder?: string;
  label?: string;
  name?: string;
  value: string;
  onchange: any;
  styles?: string;
};

const InputField = (props: propTypes) => {
  const { type, name, label, placeholder, value, onchange, styles } = props;
  return (
    <div className="mb-6">
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} />
      </div>
      <TextInput
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
};

export default InputField;
