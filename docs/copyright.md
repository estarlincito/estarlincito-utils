# 📜 Copyright Utility Function

The `copyright` function generates a dynamic copyright statement based on the year a project was built and the current year.

## 📌 Features

✔️ Automatically appends the current year to the copyright range.  
✔️ Prevents invalid build years (greater than the current year).  
✔️ Simple and reusable for various projects.

## 🚀 Installation

If this utility is part of a package, install it using:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

Then import it into your project:

```ts
import { copyright } from '@estarlincito/utils';
```

## ⚡ Usage

### Example 1: Standard Copyright Statement

```ts
const result = copyright(2022);
console.log(result); // Output: "Copyright © 2022-2025" (if current year is 2025)
```

### Example 2: Single-Year Copyright (Same Build Year & Current Year)

```ts
const result = copyright('2025');
console.log(result); // Output: "Copyright © 2025" (if current year is 2025)
```

### Example 3: Handling an Invalid Year

```ts
const result = copyright(2030); // Throws an error if current year is 2025
```

## 🛠 How It Works

- The function retrieves the current year.
- If the `buildYear` is greater than the current year, it triggers an error using `handleError()`.
- If the `buildYear` matches the current year, it returns `"Copyright © {year}"`.
- Otherwise, it returns `"Copyright © {buildYear}-{currentYear}"`.

## 📝 License

This utility is provided under the MIT License.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
