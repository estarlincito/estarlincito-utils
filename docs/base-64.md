# Base64 Utility Class

The `Base64` utility class provides methods for encoding and decoding strings between UTF-8 and Base64 formats. It simplifies the conversion process and can be used to handle Base64 strings in your application.

## 📌 Features

• Converts strings between UTF-8 and Base64 encoding.  
• Provides `encode` and `decode` methods for easy conversion.  
• Handles string conversions securely using Node.js `Buffer` class.

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

2. Import the class in your project:

```ts
import { Base64 } from '@estarlincito/utils';
```

## ⚡ Usage

The `Base64` class provides two methods: `encode` and `decode`. You can use these methods to convert between UTF-8 and Base64 string formats.

### Example 1: Encoding a UTF-8 String to Base64

```ts
const encoded = Base64.encode('Hello World');
console.log(encoded); // Outputs: "SGVsbG8gV29ybGQ="
```

### Example 2: Decoding a Base64 String to UTF-8

```ts
const decoded = Base64.decode('SGVsbG8gV29ybGQ=');
console.log(decoded); // Outputs: "Hello World"
```

## 🛠 How It Works

• The class includes a private `generate` method that performs the encoding or decoding based on the specified parameters.  
• The `encode` method converts a UTF-8 string into a Base64-encoded string.  
• The `decode` method converts a Base64-encoded string into a UTF-8 string.  
• The `Buffer` class from Node.js is used to perform the conversion between encoding formats.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
