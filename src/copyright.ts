import { handleError } from './handle-error.js';

/**
 * Generates a copyright statement based on the build year and current year.
 *
 * @param {number} buildYear The year the content was originally built.
 * @returns {string} A copyright statement, e.g. "Copyright © 2022-2025".
 */
export const copyright = (buildYear: number): string => {
  const date = new Date();
  const currentYear = date.getFullYear();

  if (buildYear > currentYear) {
    handleError(
      `buildYear (${buildYear}) cannot be greater than the current year (${currentYear}).`,
    );
  }

  // If the build year is the same as the current year, don't show a range.
  const ownYears =
    buildYear === currentYear
      ? `Copyright © ${buildYear}`
      : `Copyright © ${buildYear}-${currentYear}`;

  return ownYears;
};
