# ArrayUtils Class

The `ArrayUtils` utility class provides methods for performing operations on arrays, such as retrieving unique values or grouping objects by a specified key.

## 📌 Features

• Retrieves unique values from an array based on a specified key.  
• Allows grouping of objects based on a specified key and including additional properties.  
• Ensures immutability by returning a new array with unique objects or values.

## 🚀 Installation

To use this utility in your project, you can install it via pnpm, npm, or yarn if packaged as a module.

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
import { ArrayUtils } from '@estarlincito/utils';
```

## Usage

The `ArrayUtils` class provides the following methods:

- **getUniqueByKey**: Returns an array of unique objects based on a specified key.
- **getUniqueValues**: Extracts unique values from an array of objects based on a specified key.

### Example 1: Grouping Objects by Key and Including Additional Keys

```ts
const data = [
  { id: 1, category: 'Tech', url: 'https://example.com/tech' },
  { id: 2, category: 'Health', url: 'https://example.com/health' },
  { id: 3, category: 'Tech', url: 'https://example.com/tech' },
];

const result = ArrayUtils.getUniqueByKey(data, 'category', 'url');
console.log(result);
// Output:
// [
//   { category: 'Tech', url: 'https://example.com/tech' },
//   { category: 'Health', url: 'https://example.com/health' }
// ]
```

### Example 2: Extracting Unique Values from an Array of Objects

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

## 🛠 How It Works

- The **`getUniqueByKey`** method groups objects by a specified key and includes additional specified keys in the resulting objects.
- The **`getUniqueValues`** method returns an array of unique values for a given key, removing duplicates using a `Set`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.  
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))
