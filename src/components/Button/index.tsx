import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

type Ref = HTMLButtonElement | null;

export const ButtonDefault = forwardRef<Ref, ButtonProps>((props, ref) => (
  <Button {...props} ref={ref}>
    {props.children}
  </Button>
));