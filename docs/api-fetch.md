# apiFetch Utility Function

The `apiFetch` function is a simplified wrapper for making HTTP requests. It allows for making `GET`, `POST`, `PUT`, and `DELETE` requests with a configurable request body and headers. The function also includes URL encoding for the request body if necessary.

## 📌 Features

• Supports `GET`, `POST`, `PUT`, and `DELETE` HTTP methods.  
• Automatically handles `application/x-www-form-urlencoded` content type for POST and PUT requests.  
• Provides error handling with custom error messages in case of invalid JSON input or HTTP errors.  
• Allows for flexible URL and body configurations.

## 🚀 Installation

To use this utility in your project, you can install it via `pnpm`, `npm`, or `yarn` if packaged as a module.

1. Install the utility:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

2. Import the function in your project:

```ts
import { apiFetch } from '@estarlincito/utils';
```

## ⚡ Usage

The `apiFetch` function allows you to send HTTP requests with various configurations. You can specify the URL, request method, body, and headers.

### Example 1: Making a GET Request

```ts
const result = await apiFetch({
  url: 'https://api.example.com/data',
  method: 'GET',
  headers: {
    Authorization: 'Bearer token',
  },
});

console.log(result);
```

### Example 2: Making a POST Request with JSON Body

```ts
const result = await apiFetch({
  url: 'https://api.example.com/submit',
  method: 'POST',
  body: JSON.stringify({
    'first-name': 'Estarlin',
    'last-name': 'R',
  }),
  headers: {
    Authorization: 'Bearer token',
  },
});

console.log(result);
```

### Example 3: Handling HTTP Errors

```ts
try {
  const result = await apiFetch({
    url: 'https://api.example.com/error-endpoint',
    method: 'GET',
    headers: {},
  });
} catch (error) {
  console.error(error.message);
}
```

## ❌ Incorrect Usage

```ts
const result = await apiFetch({
  url: 'https://api.example.com/data',
  method: 'POST',
  body: 'Invalid JSON string',
  headers: {},
}); // ❌ Throws error due to invalid JSON
```

## ✅ Correct Usage

```ts
const result = await apiFetch({
  url: 'https://api.example.com/data',
  method: 'POST',
  body: JSON.stringify({
    'first-name': 'Estarlin',
  }),
  headers: {},
}); // ✅ Works as expected
```

## 🛠 How It Works

• The function accepts an object containing the URL, body, HTTP method, and headers.  
• It serializes the body if necessary and converts the data into a URL-encoded string for POST and PUT requests.  
• It performs an HTTP request using the `fetch` API, and handles errors such as invalid JSON input or unsuccessful HTTP responses.  
• If a request fails, the function throws a custom error message via the `handleError` function.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
