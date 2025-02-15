import { handleError } from './handle-error.js';
/**
 * Represents the configuration options for making a request.
 *
 * @interface RequestConfig
 * @property {URL | string} url - The URL for the request, which can be a `URL` object or a string.
 * @property {string} [body] - The body of the request, which should be a JSON string (e.g., `JSON.stringify({ 'first-name': 'Estarlin' })`).
 * @property {HeadersInit} headers - The headers to include in the request.
 * @property {'GET' | 'POST' | 'PUT' | 'DELETE'} method - The HTTP method to use for the request.
 */
export interface RequestConfig {
  url: URL | string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: string;
  // eslint-disable-next-line no-undef
  headers?: HeadersInit;
}

/**
 * Encodes an object as a URL-encoded query string.
 *
 * This function takes a JSON string (body) and converts it into a format suitable for sending as `application/x-www-form-urlencoded`.
 * If the input is not a valid JSON string, it calls `handleError` with an error message.
 *
 * @param {string} obj - The JSON string to be encoded into a URL-encoded query string.
 * @returns {string} The URL-encoded query string.
 * @throws {AppError} Throws an `AppError` if the input is not a valid JSON string.
 */
const urlencoded = (obj: string): string | undefined => {
  try {
    const parsedObj = JSON.parse(obj) as Record<string, string>;
    return new URLSearchParams(parsedObj).toString();
  } catch {
    handleError('Invalid JSON string in body');
    return undefined;
  }
};
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
export const apiFetch = async ({
  url,
  body,
  headers,
  method,
}: RequestConfig): Promise<Response> => {
  const urlString = url instanceof URL ? url.toString() : url;

  const init = {
    method,
    body: body ? urlencoded(body) : undefined,
    headers: headers
      ? headers
      : {
          Accept: '*/*',
          'User-Agent': 'Estarlincito (https://www.estarlincito.com)',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
  };

  const res = await fetch(urlString, init);
  if (!res.ok) {
    handleError(`HTTP error! status: ${res.status}`);
  }
  return res;
};
