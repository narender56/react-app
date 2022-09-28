interface ErrorMessageProps {
  testId: string;
  message: string;
  className?: string;
}

export const ErrorMessage = ({ testId, className, message }: ErrorMessageProps) => {
  return (
    <span className={`text-red-500 text-sm ${className}`} data-testid={testId}>{message}</span>
  );
}
