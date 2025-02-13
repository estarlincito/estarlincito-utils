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
export const pagination = (page, data = []) => {
    const length = data.length;
    const emptyPaginationResult = {
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
    if (parsedPage <= 0)
        return emptyPaginationResult;
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
