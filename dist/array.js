/**
 * Utility class for array operations.
 * This class cannot be instantiated.
 */
export class ArrayUtils {
    constructor() { }
    /**
     * Returns an array of unique objects based on a specified key.
     * It keeps the first occurrence of each unique key and includes additional specified properties.
     *
     * @template T - The type of objects in the array.
     * @template K - The keys to include in the output.
     * @param {T[]} array - The array of objects to process.
     * @param {keyof T} groupKey - The key used to determine uniqueness.
     * @param {...K[]} includeKeys - Additional keys to retain in the resulting objects.
     * @returns {Pick<T, K | typeof groupKey>[]} - A new array with unique objects based on the groupKey.
     *
     * @example
     * const data = [
     *   { id: 1, category: 'Tech', url: 'https://example.com/tech' },
     *   { id: 2, category: 'Health', url: 'https://example.com/health' },
     *   { id: 3, category: 'Tech', url: 'https://example.com/tech' }
     * ];
     *
     * const result = ArrayUtils.getUniqueByKey(data, 'category', 'url');
     * console.log(result);
     * // Output:
     * // [
     * //   { category: 'Tech', url: 'https://example.com/tech' },
     * //   { category: 'Health', url: 'https://example.com/health' }
     * // ]
     */
    static getUniqueByKey = (array, groupKey, ...includeKeys) => {
        return Object.values(array.reduce((acc, obj) => {
            const keyValue = obj[groupKey]; // Ensure it's a valid key
            if (!acc[keyValue]) {
                acc[keyValue] = { [groupKey]: keyValue };
                for (const key of includeKeys) {
                    acc[keyValue][key] = obj[key];
                }
            }
            return acc;
        }, {}));
    };
    /**
     * Extracts unique values from an array of objects based on a specified key.
     *
     * @template T - The object type in the array.
     * @template K - The key in the object whose unique values should be extracted.
     * @param {T[]} array - The array of objects to process.
     * @param {K} key - The key whose unique values should be returned.
     * @returns {T[K][]} An array of unique values for the specified key.
     */
    static getUniqueValues = (array, key) => {
        return [...new Set(array.map((item) => item[key]))];
    };
}
class MyClass {
    greet() {
        return '';
    }
    // Static method to simulate object creation without `new`
    static create(name, value) {
        const instance = Object.create(MyClass.prototype);
        instance.name = name;
        instance.value = value;
        return instance;
    }
}
Object.freeze(new MyClass());
Object.freeze(MyClass.prototype);
