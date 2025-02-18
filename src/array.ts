/* eslint-disable @typescript-eslint/no-explicit-any */
type NestedPaths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${K}` | (T[K] extends object ? `${K}:${NestedPaths<T[K]>}` : never)
        : never;
    }[keyof T]
  : never;

type NestedValue<
  T,
  P extends NestedPaths<T>,
> = P extends `${infer K}:${infer Rest}`
  ? K extends keyof T
    ? Rest extends NestedPaths<T[K]>
      ? NestedValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;

/**
 * Utility class for array operations.
 * This class cannot be instantiated.
 */
export class ArrayUtils {
  private constructor() {}

  /**
   * Returns an array of unique objects based on a specified key (supports nested paths).
   * Maintains type safety and autocomplete for both top-level and nested keys.
   *
   * @template T - The type of objects in the array
   * @template GK - The group key path (supports nested paths using colon syntax)
   * @template IK - The include key paths (supports nested paths using colon syntax)
   * @param {T[]} array - The array of objects to process
   * @param {GK} groupKey - The key path used to determine uniqueness
   * @param {...IK} includeKeys - Additional key paths to retain in the output
   * @returns {Array<Record<GK | IK[number], NestedValue<T, GK | IK[number]>>} - Array of unique objects
   */
  static getUniqueByKey<
    T extends object,
    GK extends NestedPaths<T>,
    IK extends NestedPaths<T>[],
  >(
    array: T[],
    groupKey: GK,
    ...includeKeys: IK
  ): Array<Record<GK | IK[number], NestedValue<T, GK | IK[number]>>> {
    const seen = new Set<PropertyKey>();

    return array.reduce(
      (acc, obj) => {
        const getValue = <P extends NestedPaths<T>>(
          path: P,
        ): NestedValue<T, P> => {
          return path.split(':').reduce((acc: any, part) => acc?.[part], obj);
        };

        const groupValue = getValue(groupKey);
        const compositeKey =
          typeof groupValue === 'object'
            ? JSON.stringify(groupValue)
            : groupValue;

        if (!seen.has(compositeKey as PropertyKey)) {
          seen.add(compositeKey as PropertyKey);
          const newItem = {} as Record<GK | IK[number], any>;

          // Add group key value
          newItem[groupKey] = groupValue;

          // Add included keys
          includeKeys.forEach((key) => {
            newItem[key] = getValue(key);
          });

          acc.push(newItem);
        }

        return acc;
      },
      [] as Array<Record<GK | IK[number], any>>,
    );
  }

  /**
   * Extracts unique values from an array of objects based on a specified key.
   *
   * @template T - The object type in the array.
   * @template K - The key in the object whose unique values should be extracted.
   * @param {T[]} array - The array of objects to process.
   * @param {K} key - The key whose unique values should be returned.
   * @returns {T[K][]} An array of unique values for the specified key.
   *
   * @example
   * const data = [
   *   { id: 1, category: 'Tech', url: 'https://example.com/tech' },
   *   { id: 2, category: 'Health', url: 'https://example.com/health' },
   *   { id: 3, category: 'Tech', url: 'https://example.com/tech' },
   *   { id: 4, category: 'Education', url: 'https://example.com/education' },
   * ];
   *
   * const uniqueCategories = getUniqueValues(data, 'category');
   * console.log(uniqueCategories);
   * // Output: ['Tech', 'Health', 'Education']
   */
  static getUniqueValues = <T, K extends keyof T>(
    array: T[],
    key: K,
  ): T[K][] => {
    return [...new Set(array.map((item) => item[key]))];
  };
}
