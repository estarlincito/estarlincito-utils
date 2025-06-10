export interface Init extends Pick<RequestInit, 'headers'> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: Record<string, string>;
}
/**
 * Wrapper around the native fetch function that automatically formats the body
 * as `application/x-www-form-urlencoded` when appropriate.
 *
 * @param {URL|string} url - The URL to fetch. Can be a string or URL object.
 * @param {Object} [init] - Optional configuration object.
 * @param {'GET'|'POST'|'PUT'|'DELETE'} [init.method='GET'] - HTTP method.
 * @param {Record<string, string>} [init.body] - Key-value pairs to send as the request body.
 * @param {HeadersInit} [init.headers] - Additional headers to include in the request.
 *
 * @returns {Promise<Response>} - The fetch Response promise.
 *
 * @example
 * // Client-side: Sending a POST request with urlencoded body
 * const response = await apiFetch('https://api.example.com/login', {
 *   method: 'POST',
 *   body: {
 *     token: 'abc123',
 *   },
 * });
 *
 * if (response.ok) {
 *   const data = await response.json();
 *   console.log(data);
 * }
 *
 * @example
 * // Server-side: Reading the form-urlencoded data from the request (e.g. in a Next.js API route)
 * export async function POST(req: Request) {
 *   // In some environments (like Next.js Edge API routes) you can do:
 *   const formData = await req.formData();
 *   const token = formData.get('token') ?? '';
 *
 *   // Or in Node.js with Express you parse it with middleware like express.urlencoded()
 *
 *   return new Response(JSON.stringify({ token }), {
 *     status: 200,
 *     headers: { 'Content-Type': 'application/json' },
 *   });
 * }
 */
export declare const apiFetch: (url: URL | string, init?: Init) => Promise<Response>;
