import React, { HTMLProps } from 'react';
import { ErrorMessage } from '../../atoms';

interface InputProps extends HTMLProps<HTMLInputElement> {
  testId: string;
  label?: string;
  errorMessage?: string;
  labelClasses?: string;
  containerClass?: string;
}

export const Input = ({ testId, className, containerClass, label, labelClasses, errorMessage, placeholder, ...inputProps }: InputProps) => {
  const hasError = !!errorMessage;

  return (
    <div className={`relative md:w-full ${containerClass}`} data-testid={testId}>
      <label htmlFor={inputProps.id} className={`block text-xs mb-1 font-medium ${labelClasses}`}>{label || placeholder}</label>
      <input className={`${className} ${hasError && 'border-red-500'}`} {...inputProps} data-testid={`${testId}-input`}/>
      {
        hasError && (
          <ErrorMessage testId={`${testId}-error`} className="absolute -bottom-5 left-0 text-[10px]" message={errorMessage} />
        )
      }
    </div>
  )
}
