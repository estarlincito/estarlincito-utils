# sortByDate Utility Function

The `sortByDate` function provides a simple way to sort an array of objects by date. It can sort objects based on a specific key representing a date in string format.

## 📌 Features

• Sorts an array of objects based on a date key.  
• Supports any object type as long as the key exists in the object and represents a date in string format.  
• Returns a new array sorted by date in descending order (newest first).

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
import { sortByDate } from '@estarlincito/utils';
```

## ⚡ Usage

The `sortByDate` function allows you to sort an array of objects by a date key.

### Example 1: Sorting an Array of Objects by Date

```ts
interface Event {
  name: string;
  date: string; // Date represented as a string
}

const events: Event[] = [
  { name: 'Event 1', date: '2025-02-14' },
  { name: 'Event 2', date: '2025-01-01' },
  { name: 'Event 3', date: '2025-03-01' },
];

const sortedEvents = sortByDate(events, 'date');
console.log(sortedEvents);
```

### Example 2: Sorting an Array of Objects with Different Date Formats

```ts
interface Task {
  title: string;
  dueDate: string; // Date represented as a string
}

const tasks: Task[] = [
  { title: 'Task 1', dueDate: '2025-05-10' },
  { title: 'Task 2', dueDate: '2025-02-20' },
  { title: 'Task 3', dueDate: '2025-04-05' },
];

const sortedTasks = sortByDate(tasks, 'dueDate');
console.log(sortedTasks);
```

## 🛠 How It Works

• The function accepts an array of objects and a key to sort by.  
• It converts the date value associated with the key into a `Date` object and compares the dates.  
• The result is a new array sorted in descending order (newest to oldest) based on the date values.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
