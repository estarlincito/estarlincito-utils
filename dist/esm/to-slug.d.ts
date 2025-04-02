/**
 * Converts a string into a URL-friendly slug.
 *
 * This function normalizes the string by removing accents, converting it to lowercase,
 * replacing spaces with hyphens, and removing special characters.
 *
 * @param {string} str - The input string to be converted into a slug.
 * @returns {string} The slugified string.
 *
 * @example
 * const slug = toSlug('Héllo Wörld!');
 * console.log(slug); // Output: "hello-world"
 */
export declare const toSlug: (str: string) => string;
