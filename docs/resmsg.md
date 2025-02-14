# resmsg Utility Function

The `resmsg` function creates a standardized HTTP response object based on the success, message, and status code. It is useful for generating consistent API responses.

## 📌 Features

• Creates an HTTP response object with a status code and a message body.  
• Supports different status codes (e.g., `200`, `400`, `401`, `404`, `500`).  
• Returns a JSON-formatted response with a `success` and `message` field.

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
import { resmsg } from '@estarlincito/utils';
```

## ⚡ Usage

The `resmsg` function allows you to generate standardized API responses based on the input parameters.

### Example 1: Success Response

```ts
const response = resmsg({
  success: true,
  message: 'Request was successful!',
  code: 200,
});

console.log(response); // HTTP Response with status 200 and message: "Request was successful!"
```

### Example 2: Error Response (400 - Bad Request)

```ts
const response = resmsg({
  success: false,
  message: 'Bad Request: Missing required fields.',
  code: 400,
});

console.log(response); // HTTP Response with status 400 and message: "Bad Request: Missing required fields."
```

### Example 3: Error Response (404 - Not Found)

```ts
const response = resmsg({
  success: false,
  message: 'Resource not found.',
  code: 404,
});

console.log(response); // HTTP Response with status 404 and message: "Resource not found."
```

## 🛠 How It Works

• The function accepts an object with `success`, `message`, and `code` properties.  
• The `success` field is a boolean indicating whether the request was successful.  
• The `message` field is a string containing the response message.  
• The `code` field is the HTTP status code (either `200` for success or `400`, `401`, `404`, or `500` for errors).  
• It returns a new `Response` object with a JSON body and the specified status code.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
