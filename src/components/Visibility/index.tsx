import React from 'react';
import { VisibilityProps } from './interface';

export function Visibility(props: VisibilityProps) {
  const { visible, children } = props;

  return visible ? <>{children}</> : <></>;
};