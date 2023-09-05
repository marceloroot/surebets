import { InputHTMLAttributes, forwardRef } from "react";

import { BaseInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input = forwardRef((propsDefault: InputProps, ref: any) => {

  const { id, ...rest } = propsDefault;

  return (
    <BaseInput
      id={id}
      {...rest}
      ref={ref}
    />
  );
});