import { throwAppError as t } from "./error-handling.mjs";
class p {
  // not used yet, but forces subclassing if needed
  /**
   * Creates a JSON response with proper status and optional headers.
   * @param body The response body (must be serializable).
   * @param init Optional status code and headers.
   * @returns A standardized JSON Response object.
   */
  static json(s = {}, r = {}) {
    const { status: e = 200, headers: n } = r;
    if (s.success === !0 && e !== 200)
      throw t("Success responses must use status 200.");
    if (s.success === !1 && e === 200)
      throw t("Failed responses must use a non-200 status.");
    return new Response(JSON.stringify(s), {
      headers: {
        "Content-Type": "application/json",
        ...n
      },
      status: e
    });
  }
}
export {
  p as ApiResponse
};
