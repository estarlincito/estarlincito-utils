/**
 * Removes specified keys from an object.
 *
 * @param obj - The object from which keys will be removed.
 * @param keys - The key(s) to remove. This can be a single key (string) or an array of keys.
 * @returns A new object without the specified keys.
 *
 * @example
 * const obj = { a: 'hello', b: 'world' };
 * const filteredObj = removeKeys(obj, 'a');
 * console.log(filteredObj); // { b: 'world' }
 *
 * @example
 * const obj = { a: 'hello', b: 'world', c: 'foo' };
 * const filteredObj = removeKeys(obj, ['a', 'b']);
 * console.log(filteredObj); // { c: 'foo' }
 */
declare const removeKeys: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K | K[]) => Omit<T, K>;
export default removeKeys;
