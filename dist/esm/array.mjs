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
  static getUniqueByKey(r, e, ...s) {
    const a = /* @__PURE__ */ new Set();
    return r.reduce(
      (o, l) => {
        const c = (t) => (
          // eslint-disable-next-line no-shadow
          t.split(":").reduce((n, m) => n?.[m], l)
        ), i = c(e), u = JSON.stringify({
          [e]: i,
          ...Object.fromEntries(s.map((t) => [t, c(t)]))
        });
        if (!a.has(u)) {
          a.add(u);
          const t = {};
          t[e] = i, s.forEach((n) => {
            t[n] = c(n);
          }), o.push(t);
        }
        return o;
      },
      []
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
  static getUniqueValues = (r, e) => [...new Set(r.map((s) => s[e]))];
}
export {
  d as ArrayUtils
};
