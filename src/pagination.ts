/**
 * Represents a link for pagination, including the query string and a flag indicating whether the pagination should stop.
 *
 * @property {string} query - The query string for the link (e.g., `?page=2`).
 * @property {boolean} stop - A flag indicating whether pagination should stop. If true, no further pages exist.
 */
export type LinkType = { query: string; stop: boolean };
/**
 * Represents a page type, which can be either a string (e.g., `'1'`, `'2'`, etc.) or undefined.
 * This is used for pagination to identify the current page.
 */
export type PageType = string | undefined;
/**
 * Represents the ellipsis for pagination, including the previous, current, and next page numbers.
 *
 * @property {number} prev - The previous page number in the pagination sequence.
 * @property {number} curr - The current page number.
 * @property {number} next - The next page number in the pagination sequence.
 */
export type Ellipsis = {
  prev: number;
  curr: number;
  next: number;
};

/**
 * Represents the result of pagination, containing the paginated data and navigation links.
 *
 * @interface PaginationResult
 * @template T - The type of the items in the paginated data.
 * @property {T[]} data - The current page's data.
 * @property {LinkType} next - The next page's link and stop flag.
 * @property {LinkType} prev - The previous page's link and stop flag.
 * @property {number} length - The total number of items in the full dataset.
 * @property {number} start - The starting index of the current page's data.
 * @property {number} end - The ending index of the current page's data.
 */
export interface PaginationResult<T> {
  data: T[];
  next: LinkType;
  prev: LinkType;
  length: number;
  start: number;
  end: number;
}

/**
 * Paginates an array of data based on the provided page number.
 * It returns a `PaginationResult` object containing the data for the current page and navigation information.
 *
 * @param {PageType} page - The current page number or a string representation of the page.
 * @param {T[]} data - The data to paginate. Defaults to an empty array if no data is provided.
 * @returns {PaginationResult<T>} An object representing the paginated data, including the data for the current page and links to the previous and next pages.
 *
 * @template T - The type of the items in the paginated data.
 *
 * @example
 * const data = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
 * const page = 1;
 * const result = pagination(page, data);
 * console.log(result.data); // ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
 * console.log(result.next.query); // '?page=2'
 *
 * @example
 * const page = 2;
 * const result = pagination(page, data);
 * console.log(result.data); // ['item7']
 * console.log(result.prev.query); // '?page=1'
 */
export const pagination = <T>(
  page: PageType,
  data: T[] = [],
): PaginationResult<T> => {
  const length = data.length;

  const emptyPaginationResult: PaginationResult<T> = {
    data: [],
    next: { query: '#', stop: true },
    prev: { query: '#', stop: true },
    start: 0,
    end: 0,
    length: 0,
  };

  if (!page || isNaN(parseInt(page))) {
    return {
      data: data.slice(0, 6),
      next: { query: `?page=2`, stop: data.length < 6 },
      prev: { query: '#', stop: true },
      start: 1,
      end: Math.min(6, data.length),
      length,
    };
  }

  const parsedPage = typeof page === 'number' ? page : parseInt(page, 10);
  if (parsedPage <= 0) return emptyPaginationResult;

  const start = (parsedPage - 1) * 6;
  const end = Math.min(start + 6, length);

  if (start >= end) {
    return emptyPaginationResult;
  }

  return {
    data: data.slice(start, end),
    next: {
      query: `?page=${parsedPage + 1}`,
      stop: end === length,
    },
    prev: {
      query: parsedPage > 1 ? `?page=${parsedPage - 1}` : '#',
      stop: parsedPage <= 1,
    },
    start: start + 1,
    end,
    length,
  };
};
