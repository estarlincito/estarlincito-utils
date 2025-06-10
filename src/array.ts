/* eslint-disable @typescript-eslint/no-explicit-any */
type NestedPaths<T, Depth extends any[] = []> = T extends object
  ? Depth['length'] extends 3
    ? never
    : {
        [K in keyof T]: K extends string
          ? T[K] extends any[]
            ? `${K}`
            : `${K}` | `${K}:${NestedPaths<T[K], [...Depth, any]>}`
          : never;
      }[keyof T]
  : never;

type NestedValue<T, P extends string> = P extends `${infer K}:${infer Rest}`
  ? K extends keyof T
    ? NestedValue<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

/**
 * Utility class for array operations.
 * This class cannot be instantiated.
 */
export abstract class ArrayUtils {
  abstract prop: string;

  /**
   * Get unique objects by nested keys with full type safety
   * @example
   * const data = [
   *   {
   *     category: 'Tech',
   *     url: '/tech',
   *     data: { pathnames: { cat: 'alpha', sub: 'beta' } }
   *   },
   *   {
   *     category: 'Health',
   *     url: '/health',
   *     data: { pathnames: { cat: 'gamma', sub: 'delta' } }
   *   },
   *   {
   *     category: 'Tech',
   *     url: '/tech',
   *     data: { pathnames: { cat: 'alpha', sub: 'epsilon' } }
   *   }
   * ];
   *
   * // Get unique items by nested category
   * const result = ArrayUtils.getUniqueByKey(
   *   data,
   *   'data:pathnames:cat', // Group by nested category
   *   'category',           // Include top-level category
   *   'url'                 // Include URL
   * );
   *
   * // Result type: Array<{ 'data:pathnames:cat': string, category: string, url: string }>
   * console.log(result);
   * // Output:
   * // [
   * //   {
   * //     'data:pathnames:cat': 'alpha',
   * //     category: 'Tech',
   * //     url: '/tech'
   * //   },
   * //   {
   * //     'data:pathnames:cat': 'gamma',
   * //     category: 'Health',
   * //     url: '/health'
   * //   }
   * // ]
   */
  static getUniqueByKey<
    T extends object,
    GK extends NestedPaths<T>,
    IK extends NestedPaths<T>[],
  >(
    array: T[],
    groupKey: GK,
    ...includeKeys: IK
  ): Record<GK | IK[number], NestedValue<T, GK | IK[number]>>[] {
    const seen = new Set<string>();

    return array.reduce(
      (acc, obj) => {
        const getNestedValue = <P extends string>(path: P): NestedValue<T, P> =>
          // eslint-disable-next-line no-shadow
          path.split(':').reduce((acc: any, part) => acc?.[part], obj);

        const groupValue = getNestedValue(groupKey);
        const compositeKey = JSON.stringify({
          [groupKey]: groupValue,
          ...Object.fromEntries(includeKeys.map((k) => [k, getNestedValue(k)])),
        });

        if (!seen.has(compositeKey)) {
          seen.add(compositeKey);
          const newItem = {} as Record<string, unknown>;

          // Add group key
          newItem[groupKey] = groupValue;

          // Add included keys
          includeKeys.forEach((key) => {
            newItem[key] = getNestedValue(key);
          });

          acc.push(newItem as (typeof acc)[number]);
        }

        return acc;
      },
      [] as Record<GK | IK[number], any>[],
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
  ): T[K][] => [...new Set(array.map((item) => item[key]))];
}
