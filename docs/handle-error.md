# handleError Utility Function

The `handleError` function is a simple error-handling utility that throws an `AppError` with a custom message and optional error code. It helps standardize error handling in applications by providing structured error messages.

## 📌 Features

• Throws a custom `AppError` with a descriptive error message.  
• Supports an optional error code for better debugging.  
• Extends the native `Error` class to provide a structured error format.  
• Ensures consistency in error handling across the application.

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
import { handleError } from '@estarlincito/utils';
```

## ⚡ Usage

The `handleError` function throws an `AppError`, ensuring that all errors follow a structured format.

### Example 1: Throwing a Simple Error

```ts
handleError('Something went wrong');
```

**Output:**

```
AppError: Something went wrong
```

### Example 2: Throwing an Error with a Custom Code

```ts
handleError('Database connection failed', 'DB_CONN_ERROR');
```

**Output:**

```
AppError: Database connection failed
  at ...
  code: 'DB_CONN_ERROR'
```

### Example 3: Handling the Error with try-catch

```ts
try {
  handleError('Invalid user input', 'INVALID_INPUT');
} catch (error) {
  console.error(error.name); // AppError
  console.error(error.message); // Invalid user input
  console.error(error.code); // INVALID_INPUT
}
```

## ❌ Incorrect Usage

```ts
const error = handleError('This will not work'); // ❌ Returns nothing because handleError always throws an error.
```

## ✅ Correct Usage

```ts
try {
  handleError('Something went wrong');
} catch (error) {
  console.error(error);
}
```

## 🛠 How It Works

• `handleError` creates a new `AppError` instance with the provided message and optional code.  
• The `AppError` class extends the native `Error` class, ensuring compatibility with JavaScript error handling.  
• Calling `handleError` immediately throws an error, forcing developers to handle it properly using `try-catch`.  
• It ensures all errors in the project follow a structured and meaningful format.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
