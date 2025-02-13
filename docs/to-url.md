# toURL Utility Function

The `toURL` function safely converts a string into a `URL` object, validating the format and handling errors gracefully.

## 📌 Features

- Converts a valid URL string into a `URL` object.
- Returns `undefined` and throws an error if the URL is invalid.
- Helps ensure proper URL validation before use in requests or navigation.

## 🚀 Installation

This function is part of `@estarlincito/utils`. Install it using:

```sh
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

## ⚡ Usage

Import the function in your project:

```ts
import { toURL } from '@estarlincito/utils';

const url = toURL('https://example.com');
console.log(url); // URL { href: 'https://example.com/', ... }
```

### ✅ Correct Usage

```ts
const validURL = toURL('https://google.com');
console.log(validURL?.href); // "https://google.com/"

const anotherValidURL = toURL('http://localhost:3000');
console.log(anotherValidURL?.href); // "http://localhost:3000/"
```

### ❌ Incorrect Usage

```ts
const invalidURL = toURL('invalid-url');
// Throws: "Invalid URL: invalid-url, example: 'https://example.com/'"
```

## 🛠 How It Works

- **Try-Catch Handling:** It attempts to create a `URL` object using `new URL(url)`.
- **Error Handling:** If the input is not a valid URL, it triggers `handleError` with a descriptive message.
- **Ensures Validity:** Prevents invalid URLs from being used in API calls, navigation, or link generation.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
