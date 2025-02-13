import { handleError } from './handle-error.js';

/**
 * Converts a string into a `URL` object.
 *
 * @param {string} url - The URL string to convert.
 * @returns {URL | undefined} A valid `URL` object if the conversion is successful, otherwise throws an error.
 *
 * @throws {AppError} If the input string is not a valid URL.
 *
 * @example
 * ```ts
 * import { toURL } from 'estarlincito-utils';
 *
 * const validUrl = toURL('https://example.com');
 * console.log(validUrl); // URL { href: 'https://example.com/' }
 *
 * const invalidUrl = toURL('invalid-url'); // Throws an error: "Invalid URL: invalid-url, example: 'https://example.com/'"
 * ```
 */
export const toURL = (url: string): URL | undefined => {
  try {
    return new URL(url);
  } catch {
    return handleError(`Invalid URL: ${url}, example: 'https://example.com/'`);
  }
};
