/**
 * Custom error class for application-specific errors.
 * Extends the built-in `Error` class.
 */
class AppError extends Error {
  /**
   * Creates an instance of `AppError`.
   *
   * @param {string} message - The error message.
   * @param {string} [code] - An optional error code to categorize the error.
   */
  constructor(
    message: string,
    public code?: string,
  ) {
    super(message);
    this.name = 'AppError';
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
 *   handleError('Something went wrong', 'ERR001');
 * } catch (error) {
 *   console.error(error.name); // 'AppError'
 *   console.error(error.message); // 'Something went wrong'
 *   console.error(error.code); // 'ERR001'
 * }
 */
const handleError = (message: string, code?: string): never => {
  throw new AppError(message, code);
};

export default handleError;
