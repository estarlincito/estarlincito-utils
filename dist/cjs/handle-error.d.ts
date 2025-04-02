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
export declare const handleError: (message: string, code?: string) => never;
