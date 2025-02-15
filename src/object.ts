/**
 * A utility class for manipulating object keys, allowing retrieval or removal of specified keys.
 */
export class ObjectUtils {
  /**
   * Generates a new object with either selected or removed keys based on the provided method.
   *
   * @template T - The type of the input object.
   * @template K - The type of the keys to be manipulated.
   *
   * @param {T} obj - The input object to modify.
   * @param {K | K[]} keys - The key or array of keys to get or remove.
   * @param {'get' | 'remove'} method - The operation to perform, either 'get' to select keys or 'remove' to exclude them.
   * @returns {Pick<T, K> | Omit<T, K>} - A new object with the specified keys either selected or removed.
   */
  private static generate<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K | K[],
    method: 'get' | 'remove',
  ): Pick<T, K> | Omit<T, K> {
    const keysArray = Array.isArray(keys) ? keys : [keys];

    if (method === 'get') {
      return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keysArray.includes(key as K)),
      ) as Pick<T, K>;
    }

    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keysArray.includes(key as K)),
    ) as Omit<T, K>;
  }
  /**
   * Removes the specified keys from the provided object.
   *
   * @template T - The type of the input object.
   * @template K - The type of the keys to be removed.
   *
   * @param {T} obj - The input object from which keys will be removed.
   * @param {K | K[]} keys - The key or array of keys to remove.
   * @returns {Omit<T, K>} - A new object with the specified keys removed.
   */
  static removeKeys<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K | K[],
  ): Omit<T, K> {
    return this.generate(obj, keys, 'remove') as Omit<T, K>;
  }
  /**
   * Retrieves the specified keys from the provided object.
   *
   * @template T - The type of the input object.
   * @template K - The type of the keys to retrieve.
   *
   * @param {T} obj - The input object from which keys will be retrieved.
   * @param {K | K[]} keys - The key or array of keys to retrieve.
   * @returns {Pick<T, K>} - A new object with only the specified keys.
   */
  static getKeys<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K | K[],
  ): Pick<T, K> {
    return this.generate(obj, keys, 'get') as Pick<T, K>;
  }

  /**
   *@param f — Object on which to lock the attributes.
   */
  static freeze = Object.freeze;
}
