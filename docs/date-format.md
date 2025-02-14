# dateFormat Utility Function

The `dateFormat` function provides a simple way to format a date string into a more readable format. It uses the `date-fns` library to parse and format ISO date strings.

## 📌 Features

• Converts an ISO date string into a human-readable format (e.g., `Feb 14, 2025`).  
• Uses the `date-fns` library to handle date parsing and formatting.  
• Customizable to support different locales (e.g., `enUS` for English).

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

2. Install the required dependencies (`date-fns`):

```bash
pnpm add date-fns
# or
npm install date-fns
# or
yarn add date-fns
```

3. Import the function in your project:

```ts
import { dateFormat } from '@estarlincito/utils';
```

## ⚡ Usage

The `dateFormat` function allows you to format an ISO date string into a custom format.

### Example 1: Formatting an ISO Date String

```ts
const publishedAt = '2025-02-14T00:00:00Z';
const formattedDate = dateFormat(publishedAt);
console.log(formattedDate); // Output: Feb 14, 2025
```

### Example 2: Formatting a Different Date String

```ts
const publishedAt = '2024-11-30T00:00:00Z';
const formattedDate = dateFormat(publishedAt);
console.log(formattedDate); // Output: Nov 30, 2024
```

## 🛠 How It Works

• The function accepts a date string in ISO format (e.g., `YYYY-MM-DDTHH:mm:ssZ`).  
• It parses the date using `parseISO` from the `date-fns` library.  
• The parsed date is then formatted using the `format` function from `date-fns` into the desired format (`MMM dd, yyyy`).  
• The function supports the English (US) locale by default but can be adjusted to support other locales.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
