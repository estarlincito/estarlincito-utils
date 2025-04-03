import { z } from 'zod';
/**
 * Represents a pagination link, containing a query string and a stop flag.
 */
declare const LinkTypeSchema: z.ZodObject<{
    query: z.ZodString;
    stop: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    query: string;
    stop: boolean;
}, {
    query: string;
    stop: boolean;
}>;
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
declare const PaginationResultSchema: <T>() => z.ZodEffects<z.ZodObject<{
    data: z.ZodArray<z.ZodAny, "many">;
    end: z.ZodNumber;
    length: z.ZodNumber;
    next: z.ZodObject<{
        query: z.ZodString;
        stop: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        query: string;
        stop: boolean;
    }, {
        query: string;
        stop: boolean;
    }>;
    prev: z.ZodObject<{
        query: z.ZodString;
        stop: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        query: string;
        stop: boolean;
    }, {
        query: string;
        stop: boolean;
    }>;
    start: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    length: number;
    data: any[];
    end: number;
    next: {
        query: string;
        stop: boolean;
    };
    prev: {
        query: string;
        stop: boolean;
    };
    start: number;
}, {
    length: number;
    data: any[];
    end: number;
    next: {
        query: string;
        stop: boolean;
    };
    prev: {
        query: string;
        stop: boolean;
    };
    start: number;
}>, {
    data: T[];
    length: number;
    end: number;
    next: {
        query: string;
        stop: boolean;
    };
    prev: {
        query: string;
        stop: boolean;
    };
    start: number;
}, {
    length: number;
    data: any[];
    end: number;
    next: {
        query: string;
        stop: boolean;
    };
    prev: {
        query: string;
        stop: boolean;
    };
    start: number;
}>;
/**
 * Type inferred from `PaginationResultSchema`, representing a paginated response.
 *
 * @template T - The type of items in the paginated data.
 */
type PaginationResult<T> = z.infer<ReturnType<typeof PaginationResultSchema<T>>>;
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
export declare const pagination: <T>(page: PageType, data?: T[]) => PaginationResult<T[]>;
export {};
