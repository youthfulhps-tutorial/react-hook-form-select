import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { selectableOptions } from "../constants";

export interface SelectableOption {
  value: string;
  label: string;
}

interface SelectProps {
  registerReturn: UseFormRegisterReturn;
}

//The commonly used return values of UseFormRegisterReturn
//are onChange, onBlur, name, ref...

function Select({ registerReturn }: SelectProps) {
  return (
    <select {...registerReturn}>
      {selectableOptions.map((selectableOption) => (
        <option key={selectableOption.value} value={selectableOption.value}>
          {selectableOption.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
