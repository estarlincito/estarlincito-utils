/**
 * Checks if the current environment is development.
 *
 * @param NODE_ENV - The environment variable that indicates the current environment (e.g., 'development', 'production').
 * @returns A boolean indicating if the environment is 'development'.
 *
 * @example
 * const environment = 'development';
 * const result = isDev(environment);
 * console.log(result); // true
 *
 * @example
 * const environment = 'production';
 * const result = isDev(environment);
 * console.log(result); // false
 */
export const isDev = (NODE_ENV: string) => {
  return NODE_ENV === 'development';
};
