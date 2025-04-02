class d {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
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
  static getUniqueByKey(n, e, ...s) {
    const a = /* @__PURE__ */ new Set();
    return n.reduce((o, l) => {
      const c = (t) => t.split(":").reduce((r, m) => r?.[m], l), u = c(e), i = JSON.stringify({
        [e]: u,
        ...Object.fromEntries(s.map((t) => [t, c(t)]))
      });
      if (!a.has(i)) {
        a.add(i);
        const t = {};
        t[e] = u, s.forEach((r) => {
          t[r] = c(r);
        }), o.push(t);
      }
      return o;
    }, []);
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
  static getUniqueValues = (n, e) => [...new Set(n.map((s) => s[e]))];
}
export {
  d as ArrayUtils
};
