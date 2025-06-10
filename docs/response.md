# `ApiResponse` Utility Class

The `ApiResponse` class provides a utility method to build consistent JSON API responses using standard HTTP status codes and structured response bodies.

## 📌 Features

• Standardizes API responses with `success`, `message`, and custom `data`.
• Enforces consistency between `success` and the `status` code.
• Allows optional custom headers.
• Supports commonly used HTTP status codes (`200`, `201`, `400`, `404`, `500`, etc.).

## 🚀 Installation

To use this utility in your project, you can install it via `pnpm`, `npm`, or `yarn` if published as a package.

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

Import the class in your project:

```ts
import { ApiResponse } from '@estarlincito/utils';
```

## ⚡ Usage

Use `ApiResponse.json()` to return structured HTTP responses:

### ✅ Example 1: Success Response

```ts
return ApiResponse.json(
  {
    data: { count: 42 },
    message: 'Data fetched successfully!',
    success: true,
  },
  { status: 200 },
);
```

### ❌ Example 2: Error Response (400 - Bad Request)

```ts
return ApiResponse.json(
  {
    message: 'Missing required parameters.',
    success: false,
  },
  { status: 400 },
);
```

### ⚠️ Example 3: Error Response (403 - Forbidden)

```ts
return ApiResponse.json(
  {
    message: 'You are not authorized to access this resource.',
    success: false,
  },
  { status: 403 },
);
```

## 🛠 How It Works

• The `json()` method returns a native `Response` object with a JSON body.
• If `success` is `true`, the status must be `200`.
• If `success` is `false`, the status must not be `200`.
• Throws an internal app error if these rules are violated.
• Headers default to `Content-Type: application/json` but can be extended.

## 🌐 Supported Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Unprocessable Entity  |
| 429  | Too Many Requests     |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
