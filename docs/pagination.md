# pagination Utility Function

The `pagination` function implements pagination logic for data sets, allowing users to retrieve specific slices of data based on the requested page. It supports navigation to the next and previous pages, and provides useful metadata for pagination.

## 📌 Features

• Returns a slice of the data based on the requested page.  
• Provides links to the next and previous pages.  
• Includes metadata such as `start`, `end`, and `length` to help display pagination information.  
• Ensures that if the page is out of range, an empty result is returned.

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
import { pagination } from '@estarlincito/utils';
```

## ⚡ Usage

The `pagination` function allows you to paginate through large data sets, retrieving specific data slices based on the requested page.

### Example 1: Basic Pagination

```ts
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = 2;
const result = pagination(page, data);

console.log(result);
/* 
{
  data: [7, 8, 9, 10],
  next: { query: '?page=3', stop: false },
  prev: { query: '?page=1', stop: false },
  start: 7,
  end: 10,
  length: 10
}
*/
```

### Example 2: Pagination with Invalid Page

```ts
const result = pagination(0, data);

console.log(result);
/* 
{
  data: [],
  next: { query: '#', stop: true },
  prev: { query: '#', stop: true },
  start: 0,
  end: 0,
  length: 10
}
*/
```

## ❌ Incorrect Usage

```ts
const result = pagination('invalid', data); // ❌ Returns empty result due to invalid page input
```

## ✅ Correct Usage

```ts
const result = pagination(2, data); // ✅ Returns the correct paginated data for page 2
```

## 🛠 How It Works

• The function receives a `page` (either a number or string) and a `data` array.  
• It calculates the slice of the data array to be returned based on the page number.  
• The `next` and `prev` links are generated depending on the available pages.  
• If the page is out of range or invalid, an empty pagination result is returned with `stop: true` for both `next` and `prev`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
