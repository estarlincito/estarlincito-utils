import { throwAppError as r } from "./error-handling.mjs";
class n {
  // not used yet, but forces subclassing if needed
  /**
   * Creates a JSON response with proper status and optional headers.
   * @param body The response body (must be serializable).
   * @param init Optional status code and headers.
   * @returns A standardized JSON Response object.
   */
  static json(s = {}, e = {}) {
    const t = s.status ?? e.status ?? 200;
    if (s.success && t !== 200)
      throw r("Success responses must use status 200.");
    if (!s.success && t === 200)
      throw r("Failed responses must use a non-200 status.");
    return new Response(JSON.stringify(s), {
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      },
      status: s.status ?? t
    });
  }
}
export {
  n as ApiResponse
};
