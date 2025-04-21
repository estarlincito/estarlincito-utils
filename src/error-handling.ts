/**
 * Custom error class for application-specific errors.
 * Extends the built-in `Error` class.
 */
class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = 'AppError';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
/**
 * Throws an `AppError` with the specified message and optional error code.
 *
 * @param {string} message - The error message to be thrown.
 * @param {string} [code] - An optional error code for additional context.
 * @throws {AppError} Always throws an `AppError` with the provided details.
 *
 * @example
 * try {
 *   throwAppError('Something went wrong', 'ERR001');
 * } catch (error) {
 *   console.error(error.name); // 'AppError'
 *   console.error(error.message); // 'Something went wrong'
 *   console.error(error.code); // 'ERR001'
 * }
 */
export const throwAppError = (message: string, code?: string): never => {
  throw new AppError(message, code);
};

/**
 * Logs an error to the console in a consistent and readable way.
 *

 * @param message - Optional context message to prepend.
 * @param error - The error to log (can be anything).
 */
export function logError(message = 'Unexpected error', error: unknown): void {
  if (error instanceof Error) {
    // eslint-disable-next-line no-console
    console.error(`❌ ${message}:`, error.message);
    // eslint-disable-next-line no-console
    console.error(error.stack);
  } else {
    // eslint-disable-next-line no-console
    console.error(`❌ ${message}:`, error);
  }
}
