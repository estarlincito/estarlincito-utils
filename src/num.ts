import { z } from 'zod';

import { handleError } from './handle-error.js';

/**
 * Type that converts a string literal type into a number type.
 * If the string represents a valid number, it returns that specific number type.
 * Otherwise, it returns `number`.
 *
 * @template S - The string type to be converted to a number type.
 */
type ConvertLiteral<S> = S extends `${infer N extends number}` ? N : number;

/**
 * Converts a string to a number if the string is a valid number.
 * Throws an error if the string is not a valid number format.
 *
 * @param {S} n - The string to convert to a number.
 * @returns {ConvertLiteral<S>} - The converted number (or the literal number if valid).
 * @throws {Error} - Throws an error if the string is not a valid number.
 *
 * @template S - The string type passed to the function.
 */
export const num = <S extends string>(n: S): ConvertLiteral<S> => {
  const isNumber = z
    .string()
    .refine((val) => /^-?\d*\.?\d+$/.test(val), {
      message: 'Format invalid number',
    })
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), { message: 'Invalid number' });

  try {
    return isNumber.parse(n) as ConvertLiteral<S>;
  } catch {
    throw handleError('Invalid number');
  }
};
