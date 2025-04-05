import { z } from 'zod';

import { num } from './num.js';

/**
 * Represents a pagination link, containing a query string and a stop flag.
 */
const LinkTypeSchema = z.object({
  query: z.string(),
  stop: z.boolean(),
});

/** Type inferred from `LinkTypeSchema`. */
type LinkType = z.infer<typeof LinkTypeSchema>;
/**
 * Represents a page type, which can be either a string (e.g., `'1'`, `'2'`, etc.) or undefined.
 * This is used for pagination to identify the current page.
 */
type PageType = string | undefined;

/**
 * Defines the schema for paginated results.
 * @template T - The type of items in the paginated data.
 */
const PaginationResultSchema = <T>() =>
  z
    .object({
      data: z.array(z.any()),
      end: z.number(),
      length: z.number(),
      next: LinkTypeSchema,
      prev: LinkTypeSchema,
      start: z.number(),
    })
    .transform((pagination) => ({
      ...pagination,
      data: pagination.data as T[],
    }));

/**
 * Type inferred from `PaginationResultSchema`, representing a paginated response.
 *
 * @template T - The type of items in the paginated data.
 */
type PaginationResult<T> = z.infer<
  ReturnType<typeof PaginationResultSchema<T>>
>;

/**
 * Represents pagination-related types.
 *
 * @template T - The type of items in the paginated data.
 */
export interface PaginationTypes<T> {
  /** The paginated result containing data and navigation links. */
  PaginationResult: PaginationResult<T>;
  /** The type representing a page identifier. */
  PageType: PageType;
  /** The type representing pagination links. */
  LinkType: LinkType;
}

/**
 * Paginates an array of data based on the given page number.
 * It returns a `PaginationResult` containing the current page's data and navigation links.
 *
 * @template T - The type of items in the paginated data.
 * @param {PageType} page - The current page number as a string or `undefined` for the first page.
 * @param {T[]} [data=[]] - The dataset to paginate. Defaults to an empty array.
 * @returns {PaginationResult<T[]>} A paginated result object containing:
 *   - `data`: The data for the current page.
 *   - `next`: The next page's link.
 *   - `prev`: The previous page's link.
 *   - `length`: The total number of items.
 *   - `start`: The starting index of the current page.
 *   - `end`: The ending index of the current page.
 *
 * @example
 * ```ts
 * const data = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
 * const page = "1";
 * const result = pagination(page, data);
 * console.log(result.data); // ["item1", "item2", "item3", "item4", "item5", "item6"]
 * console.log(result.next.query); // "?page=2"
 * ```
 *
 * @example
 * ```ts
 * const page = "2";
 * const result = pagination(page, data);
 * console.log(result.data); // ["item7"]
 * console.log(result.prev.query); // "?page=1"
 * ```
 */
export const pagination = <T>(
  page: PageType,
  data: T[] = [],
): PaginationResult<T[]> => {
  const { length } = data;
  const paginationResultSchema = PaginationResultSchema<T[]>();

  const emptyPaginationResult = paginationResultSchema.parse({
    data: [],
    end: num('0'),
    length: num('0'),
    next: { query: '#', stop: true },
    prev: { query: '#', stop: true },
    start: num('0'),
  });

  if (!page || isNaN(parseInt(page))) {
    return paginationResultSchema.parse({
      data: data.slice(num('0'), num('6')),
      end: Math.min(num('6'), data.length),
      length,
      next: { query: `?page=2`, stop: data.length < num('6') },
      prev: { query: '#', stop: true },
      start: num('1'),
    });
  }

  const parsedPage =
    typeof page === 'number' ? page : parseInt(page, num('10'));
  if (parsedPage <= num('0')) return emptyPaginationResult;

  const start = (parsedPage - num('1')) * num('6');
  const end = Math.min(start + num('6'), length);

  if (start >= end) {
    return emptyPaginationResult;
  }

  return paginationResultSchema.parse({
    data: data.slice(start, end),
    end,
    length,
    next: {
      query: `?page=${parsedPage + num('1')}`,
      stop: end === length,
    },
    prev: {
      query: parsedPage > num('1') ? `?page=${parsedPage - num('1')}` : '#',
      stop: parsedPage <= num('1'),
    },
    start: start + num('1'),
  });
};
