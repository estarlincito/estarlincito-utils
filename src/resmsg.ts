/**
 * Creates a response object with a custom success message and HTTP status code.
 *
 * @param {Object} param0 - The response parameters.
 * @param {boolean} param0.success - Indicates if the request was successful.
 * @param {string} param0.message - A message to be returned with the response.
 * @param {200 | 400 | 401 | 404 | 500} param0.code - The HTTP status code for the response.
 *
 * @returns {Response} A `Response` object with the given status code and message.
 *
 * @example
 * // Example for successful response
 * const successResponse = resmsg({ success: true, message: 'Request was successful', code: 200 });
 *
 * @example
 * // Example for error response
 * const errorResponse = resmsg({ success: false, message: 'Not found', code: 404 });
 */
type Resmsg =
  | { success: true; message: string; code: 200 }
  | { success: false; message: string; code: 400 | 401 | 404 | 500 };

export interface ResmsgTypes {
  Resmsg: Resmsg;
}

export const resmsg = ({ success, message, code }: Resmsg): Response =>
  new Response(JSON.stringify({ message, success }), { status: code });

// 400 (Bad Request)
// 404 (Not Found)
// 401 (Unauthorized)
// 200 (OK)
