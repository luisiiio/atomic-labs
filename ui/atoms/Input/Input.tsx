import React, { FC } from "react";
import InputStyled from "./InputStyled";

const Input: FC<{
  value: string | number;
  label: string;
  type: string;
  name: string;
  errors: string;
  onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlurInput: (event: React.FormEvent<HTMLInputElement>) => void;
}> = ({ value, label, type, name, errors, onChangeInput, onBlurInput }) => {
  return (
    <InputStyled errors={errors.length > 0}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        value={value}
      />
      <p className="errors">{errors.length > 0 ? errors : ""}</p>
    </InputStyled>
  );
};

export default Input;
