/**
 * Represents the configuration options for making a request.
 *
 * @interface RequestConfig
 * @property {URL | string} url - The URL for the request, which can be a `URL` object or a string.
 * @property {string} [body] - The body of the request, which should be a JSON string (e.g., `JSON.stringify({ 'first-name': 'Estarlin' })`).
 * @property {HeadersInit} headers - The headers to include in the request.
 * @property {'GET' | 'POST' | 'PUT' | 'DELETE'} method - The HTTP method to use for the request.
 */
type RequestConfig = {
    url: URL | string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: string;
    headers?: HeadersInit;
};
export interface ApiFetchTypes {
    RequestConfig: RequestConfig;
}
/**
 * Makes an HTTP request using the `fetch` API.
 *
 * This function sends an HTTP request based on the provided `RequestConfig` object and handles the response.
 * If the request fails (i.e., the response status is not OK), it calls `handleError` with the error message.
 *
 * @param {RequestConfig} config - The configuration object containing the URL, request method, body (optional, stringified JSON), and optional headers.
 * @returns {Promise<Response>} A promise that resolves to the response object.
 * @throws {AppError} Throws an `AppError` if the response status is not OK.
 *
 * @example
 * const config: RequestConfig = {
 *   url: 'https://api.example.com/data',
 *   method: 'GET',
 *   body: JSON.stringify({ 'first-name': 'Estarlin' }),
 * };
 * const response = await apiFetch(config);
 * console.log(await response.json());
 */
export declare const apiFetch: ({ url, body, headers, method, }: RequestConfig) => Promise<Response>;
export {};
