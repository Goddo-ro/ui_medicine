import { ZodError } from 'zod';

export interface FieldError {
  readonly message: string;
  readonly fieldName: string;
}

export const errorParser = (
  error: unknown,
  setErrors: (errors: FieldError[]) => unknown,
  handleNotZodError: (error: unknown) => void,
) => {
  if (error instanceof ZodError) {
    const fieldErrors: FieldError[] = error.errors.map((err) => ({
      message: err.message,
      fieldName: err.path[0]?.toString() || '',
    }));
    setErrors(fieldErrors);
  } else {
    handleNotZodError(error);
  }
};
