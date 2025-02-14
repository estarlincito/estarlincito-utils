/**
 * Formats the given ISO date string into a human-readable date.
 *
 * @param {string} publishedAt - The ISO date string to format (e.g., '2025-02-14T10:00:00Z').
 * @returns {string} The formatted date in "MMM dd, yyyy" format (e.g., "Feb 14, 2025").
 *
 * @example
 * const formattedDate = dateFormat('2025-02-14T10:00:00Z');
 * console.log(formattedDate); // "Feb 14, 2025"
 */
export const dateFormat = (publishedAt: string): string => {
  const date = new Date(publishedAt);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
