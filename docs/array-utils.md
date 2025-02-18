# ArrayUtils Class

The `ArrayUtils` utility class provides methods for performing operations on arrays, such as retrieving unique values or grouping objects by a specified key, with support for **nested paths**.

## 📌 Features

✔️ Retrieves **unique objects** from an array based on a **nested key**.  
✔️ Extracts **distinct values** from an array of objects based on a **specified key**.  
✔️ Maintains **full TypeScript type safety** and **autocomplete support**.  
✔️ Ensures **immutability**, returning **new arrays** with unique values.

---

## 🚀 Installation

You can install this utility using **pnpm**, **npm**, or **yarn**:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

Then, import it into your project:

```ts
import { ArrayUtils } from '@estarlincito/utils';
```

---

## 📖 Methods

### 🔹 `getUniqueByKey<T>(array: T[], groupKey: NestedPaths<T>, ...includeKeys: NestedPaths<T>[])`

Returns an array of **unique objects**, grouped by the specified **nested key**, and includes additional specified keys.

#### ✅ Example: Grouping Objects by a Nested Key

```ts
const data = [
  {
    category: 'Tech',
    url: '/tech',
    data: { pathnames: { cat: 'alpha', sub: 'beta' } },
  },
  {
    category: 'Health',
    url: '/health',
    data: { pathnames: { cat: 'gamma', sub: 'delta' } },
  },
  {
    category: 'Tech',
    url: '/tech',
    data: { pathnames: { cat: 'alpha', sub: 'epsilon' } },
  },
];

// Get unique items by nested category
const result = ArrayUtils.getUniqueByKey(
  data,
  'data:pathnames:cat', // Group by nested category
  'category', // Include top-level category
  'url', // Include URL
);

console.log(result);
/* Output:
[
  {
    'data:pathnames:cat': 'alpha',
    category: 'Tech',
    url: '/tech'
  },
  {
    'data:pathnames:cat': 'gamma',
    category: 'Health',
    url: '/health'
  }
]
*/
```

---

### 🔹 `getUniqueValues<T, K extends keyof T>(array: T[], key: K): T[K][]`

Extracts **unique values** from an array of objects based on a **top-level key**.

#### ✅ Example: Extracting Unique Values

```ts
const data = [
  { id: 1, category: 'Tech', url: 'https://example.com/tech' },
  { id: 2, category: 'Health', url: 'https://example.com/health' },
  { id: 3, category: 'Tech', url: 'https://example.com/tech' },
  { id: 4, category: 'Education', url: 'https://example.com/education' },
];

const uniqueCategories = ArrayUtils.getUniqueValues(data, 'category');
console.log(uniqueCategories);
// Output: ['Tech', 'Health', 'Education']
```

---

## 🛠 How It Works

- **`getUniqueByKey`**:

  - Groups objects by a **specified key** while **preserving type safety**.
  - Supports **nested keys** using **colon (`:`) notation** (e.g., `'data:pathnames:cat'`).
  - Ensures uniqueness by tracking **seen values** and **avoiding duplicates**.

- **`getUniqueValues`**:
  - Extracts unique values for a **single key**, removing duplicates using a `Set`.

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](../LICENSE) file for details.  
👤 **Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com) )
