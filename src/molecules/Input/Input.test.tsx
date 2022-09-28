import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  const testId = 'input';

  it('should render Input', () => {
    render(<Input testId={testId}/>);
    const input = screen.getByTestId(testId);
    expect(input).toBeInTheDocument();
  });

  it('should render Input with error', () => {
    render(<Input testId={testId} errorMessage="some error"/>);
    const inputError = screen.getByTestId(`${testId}-error`);
    expect(inputError).toBeInTheDocument();
    expect(inputError).toHaveTextContent('some error')
  });
})

