import { throwAppError } from './error-handling.js';

/**
 * Asynchronously writes text to the clipboard.
 *
 * This function uses the Clipboard API to copy the provided text to the user's clipboard.
 *
 * @param text - The text to be copied to the clipboard.
 *
 * @example
 * const text = 'Hello, World!';
 * await clipMaster(text);
 * console.log('Text copied to clipboard');
 */
export const clipMaster = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    throwAppError('Failed to copy to clipboard');
  }
};
