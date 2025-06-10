class d {
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
  static getUniqueByKey(r, t, ...s) {
    const c = /* @__PURE__ */ new Set();
    return r.reduce(
      (i, l) => {
        const a = (e) => (
          // eslint-disable-next-line no-shadow
          e.split(":").reduce((n, m) => n?.[m], l)
        ), o = a(t), u = JSON.stringify({
          [t]: o,
          ...Object.fromEntries(s.map((e) => [e, a(e)]))
        });
        if (!c.has(u)) {
          c.add(u);
          const e = {};
          e[t] = o, s.forEach((n) => {
            e[n] = a(n);
          }), i.push(e);
        }
        return i;
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
  static getUniqueValues = (r, t) => [...new Set(r.map((s) => s[t]))];
}
export {
  d as ArrayUtils
};
