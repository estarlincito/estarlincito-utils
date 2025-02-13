# clipMaster Utility Function

The `clipMaster` function allows you to programmatically copy text to the clipboard. It simplifies copying text in web applications and is ideal for creating copy-to-clipboard features.

## 📌 Features

• Asynchronously copies a given text to the clipboard.  
• Works in modern browsers that support the Clipboard API.  
• Simple and easy-to-use function for text copying.

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
import { clipMaster } from '@estarlincito/utils';
```

## ⚡ Usage

The `clipMaster` function enables you to copy text to the clipboard, providing a simple and effective way to implement copy-to-clipboard functionality.

### Example 1: Copy Text to Clipboard

```ts
const text = 'Hello, World!';
await clipMaster(text);
console.log('Text copied to clipboard!');
```

### Example 2: Use clipMaster in a Button Click Handler

```ts
document.getElementById('copyButton')?.addEventListener('click', async () => {
  const text = 'This is the text to copy';
  await clipMaster(text);
  alert('Text copied!');
});
```

## ❌ Incorrect Usage

```ts
// This will not work in some browsers as it may lack support for the Clipboard API
clipMaster('Some text');
```

## ✅ Correct Usage

```ts
// Correct usage requires calling it in an async context
const text = 'Some text';
await clipMaster(text); // ✅ Text will be copied to the clipboard
```

## 🛠 How It Works

• The function accepts a string and writes it to the clipboard using the `navigator.clipboard.writeText` method.  
• It returns a `Promise`, so it must be used with `await` or `.then()`.  
• This function works in modern browsers that support the Clipboard API.  
• The function is asynchronous and returns a `Promise`, ensuring non-blocking behavior.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
