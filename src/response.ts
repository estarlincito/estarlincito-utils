/* eslint-disable @typescript-eslint/no-explicit-any */
import { throwAppError } from './error-handling.js';

export type BodyInit = Record<string, any> & {
  success?: boolean;
  error?: string;
  message?: string;
};

export type HTTPStatus =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 404
  | 409
  | 422
  | 429
  | 500
  | 502
  | 503;

export interface ResponseInit {
  /**
   * 🌐 HTTP Status Codes:
   *
   * - 200 OK – ✅ The request has succeeded.
   * - 201 Created – 🆕 A new resource has been created.
   * - 204 No Content – 📭 Request succeeded but returns no content.
   *
   * - 400 Bad Request – ❌ The request has invalid syntax.
   * - 401 Unauthorized – 🔐 Authentication is required or failed.
   * - 403 Forbidden – 🚫 You do not have permission.
   * - 404 Not Found – ❓ Resource not found.
   *
   * - 409 Conflict – ⚔️ Conflict with current state.
   * - 422 Unprocessable – 🧠 Semantically invalid request.
   * - 429 Too Many Requests – 🕓 Rate limit exceeded.
   *
   * - 500 Internal Server Error – 💥 Unexpected server failure.
   * - 502 Bad Gateway – 📡 Invalid response from upstream.
   * - 503 Service Unavailable – 💤 Server not ready to handle request.
   */
  status?: HTTPStatus;
  headers?: HeadersInit;
}

/**
 * 📦 A utility class for building consistent JSON API responses.
 *
 * @example
 * ApiResponse.json(
 *   {
 *     data: { count: 300 },
 *     message: 'Done!',
 *     success: true
 *   },
 *   {
 *     status: 200
 *   }
 * );
 */
export abstract class ApiResponse {
  abstract prop: string; // not used yet, but forces subclassing if needed

  /**
   * Creates a JSON response with proper status and optional headers.
   * @param body The response body (must be serializable).
   * @param init Optional status code and headers.
   * @returns A standardized JSON Response object.
   */
  static json(body: BodyInit = {}, init: ResponseInit = {}): Response {
    const { status = 200, headers } = init;

    if (body.success === true && status !== 200) {
      throw throwAppError('Success responses must use status 200.');
    }

    if (body.success === false && status === 200) {
      throw throwAppError('Failed responses must use a non-200 status.');
    }

    return new Response(JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      status,
    });
  }
}
