# toSlug Utility Function

The `toSlug` function converts a given string into a URL-friendly slug by normalizing characters, removing accents, and replacing spaces with dashes.

## 📌 Features

- Converts text into a lowercase, URL-safe slug.
- Removes accents and special characters.
- Replaces spaces with dashes (`-`).
- Ensures clean and readable slugs for URLs, file names, and identifiers.

## 🚀 Installation

This function is part of `@estarlincito/utils`. Install it using:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

## ⚡ Usage

Import the function in your project:

```ts
import { toSlug } from '@estarlincito/utils';

const slug = toSlug('Hello World! Cómo estás?');
console.log(slug); // "hello-world-como-estas"
```

### ✅ Correct Usage

```ts
toSlug('Hello World'); // "hello-world"
toSlug('Café con leche'); // "cafe-con-leche"
toSlug('React & Vue.js'); // "react-vuejs"
```

### ❌ Incorrect Usage

```ts
toSlug(''); // Returns an empty string
toSlug('123 456'); // "123-456" (valid but should be reviewed for numeric slugs)
```

## 🛠 How It Works

- **Normalization:** The function first normalizes Unicode characters to separate base letters from accents.
- **Diacritic Removal:** It removes any accent marks (é → e, ñ → n).
- **Lowercase Conversion:** All letters are transformed to lowercase.
- **Space Replacement:** Spaces are replaced with dashes (`-`).
- **Character Filtering:** It removes any non-alphanumeric characters except dashes.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
