/**
 * A utility class for encoding and decoding Base64 strings.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Base64 {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  /**
   * Converts a string between different encodings (base64, utf-8).
   *
   * @private
   * @param value - The string value to encode or decode.
   * @param from - The current encoding type: 'utf-8' or 'base64'.
   * @param to - The target encoding type: 'utf-8' or 'base64'.
   * @returns - The encoded or decoded string in the target format.
   */
  private static generate(
    value: string,
    from: 'utf-8' | 'base64',
    to: 'utf-8' | 'base64',
  ): string {
    return Buffer.from(value, from).toString(to);
  }

  /**
   * Encodes a string from UTF-8 to Base64.
   *
   * @param value - The string to encode in base64 format.
   * @returns - The Base64-encoded string.
   *
   * @example
   * const encoded = Base64.encode('Hello World');
   * console.log(encoded); // Outputs: "SGVsbG8gV29ybGQ="
   */
  static encode = (value: string): string =>
    this.generate(value, 'utf-8', 'base64');

  /**
   * Decodes a Base64-encoded string to UTF-8.
   *
   * @param value - The Base64-encoded string to decode.
   * @returns - The decoded string in UTF-8 format.
   *
   * @example
   * const decoded = Base64.decode('SGVsbG8gV29ybGQ=');
   * console.log(decoded); // Outputs: "Hello World"
   */
  static decode = (value: string): string =>
    this.generate(value, 'base64', 'utf-8');
}
