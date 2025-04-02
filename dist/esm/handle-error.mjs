class s extends Error {
  /**
   * Creates an instance of `AppError`.
   *
   * @param {string} message - The error message.
   * @param {string} [code] - An optional error code to categorize the error.
   */
  constructor(r, e) {
    super(r), this.code = e, this.name = "AppError";
  }
}
const t = (o, r) => {
  throw new s(o, r);
};
export {
  t as handleError
};
