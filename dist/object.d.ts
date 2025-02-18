/**
 * A utility class for manipulating object keys, allowing retrieval or removal of specified keys.
 */
export declare class ObjectUtils {
    private constructor();
    /**
     * Generates a new object with either selected or removed keys based on the provided method.
     *
     * @template T - The type of the input object.
     * @template K - The type of the keys to be manipulated.
     *
     * @param {T} obj - The input object to modify.
     * @param {K | K[]} keys - The key or array of keys to get or remove.
     * @param {'get' | 'remove'} method - The operation to perform, either 'get' to select keys or 'remove' to exclude them.
     * @returns {Pick<T, K> | Omit<T, K>} - A new object with only the specified keys, either selected or removed.
     */
    private static generate;
    /**
     * Freezes the provided object, making it immutable.
     * @param f - The object to freeze.
     */
    static freeze: {
        <T extends Function>(f: T): T;
        <T extends {
            [idx: string]: U | null | undefined | object;
        }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
        <T>(o: T): Readonly<T>;
    };
    /**
     * Removes the specified keys from the provided object.
     *
     * @template T - The type of the input object.
     * @template K - The type of the keys to be removed.
     * @param {T} obj - The input object from which keys will be removed.
     * @param {K | K[]} keys - The key or array of keys to remove.
     * @returns {Omit<T, K>} - A new object with the specified keys removed.
     */
    static removeKeys<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K>;
    /**
     * Retrieves the specified keys from the provided object.
     *
     * @template T - The type of the input object.
     * @template K - The type of the keys to retrieve.
     * @param {T} obj - The input object from which keys will be retrieved.
     * @param {K | K[]} keys - The key or array of keys to retrieve.
     * @returns {Pick<T, K>} - A new object with only the specified keys.
     * The returned object is immutable (frozen).
     */
    static getKeys<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K | K[]): Pick<T, K>;
    /**
     * Creates a deeply frozen, read-only object.
     *
     * @template T - The type of the object to freeze.
     * @param {T} data - The object to be frozen.
     * @returns {Readonly<T>} A deeply frozen and read-only version of the input object.
     *
     * @example
     * const obj = { name: "Estarlin", age: 25 };
     * const frozenObj = ObjectUtils.create(obj);
     *
     * console.log(frozenObj.name); // "Estarlin"
     * frozenObj.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property
     */
    static create: <T extends object>(data: T) => Readonly<T>;
}
