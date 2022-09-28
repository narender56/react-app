import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  testId: string;
  children: string | ReactNode;
}
export const Button = ({ testId, children, ...props}: ButtonProps) => {
  return (
    <button {...props} data-testid={testId}>{children}</button>
  );
}
