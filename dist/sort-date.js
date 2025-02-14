/**
 * Sorts an array of objects by a specific date property.
 *
 * @template T - The type of the objects in the array.
 *
 * @param {T[]} data - The array of objects to sort.
 * @param {keyof T} key - The key (property name) in the object that holds the date value.
 * @returns {T[]} The sorted array of objects.
 *
 * @example
 * const data = [
 *   { name: "Event 1", date: "2023-05-01" },
 *   { name: "Event 2", date: "2024-03-01" },
 * ];
 * const sortedData = sortByDate(data, "date");
 * console.log(sortedData);
 */
export const sortByDate = (data, key) => {
    return data.sort((a, b) => new Date(b[key]).valueOf() -
        new Date(a[key]).valueOf());
};
