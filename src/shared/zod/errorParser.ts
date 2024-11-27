import { ZodError } from 'zod';

export interface IFieldError {
  readonly message: string;
  readonly fieldName: string;
}

export const errorParser = (
  error: unknown,
  setErrors: (errors: IFieldError[]) => unknown,
  handleNotZodError: (error: unknown) => void,
) => {
  if (error instanceof ZodError) {
    const fieldErrors: IFieldError[] = error.errors.map((err) => ({
      message: err.message,
      fieldName: err.path[0]?.toString() || '',
    }));
    setErrors(fieldErrors);
  } else {
    handleNotZodError(error);
  }
};
