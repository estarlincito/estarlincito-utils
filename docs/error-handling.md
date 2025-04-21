# Error Handling Utilities

This module provides two essential utilities for error management:

- `throwAppError`: A function to throw structured application-specific errors.
- `logError`: A function to consistently log errors to the console for better debugging.

---

## 📌 Features

• Throws a custom `AppError` with a descriptive error message.  
• Supports an optional error code for better debugging.  
• Consistent error logging with contextual messages.  
• Extends the native `Error` class to maintain compatibility with JavaScript error handling.  
• Ensures consistency across all error-related operations in your application.

---

## 🚀 Installation

To use these utilities in your project, install the package:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

Import them into your project:

```ts
import { throwAppError, logError } from '@estarlincito/utils';
```

---

# 📦 `throwAppError`

The `throwAppError` function throws a custom `AppError` with a message and optional error code, standardizing how errors are thrown.

## ⚡ Usage

### Example 1: Throwing a Simple Error

```ts
throwAppError('Something went wrong');
```

**Output:**

```
AppError: Something went wrong
```

### Example 2: Throwing an Error with a Custom Code

```ts
throwAppError('Database connection failed', 'DB_CONN_ERROR');
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
  throwAppError('Invalid user input', 'INVALID_INPUT');
} catch (error) {
  console.error(error.name); // AppError
  console.error(error.message); // Invalid user input
  console.error(error.code); // INVALID_INPUT
}
```

---

# 📦 `logError`

The `logError` function provides a standardized way to log any error, ensuring consistent output during development and debugging.

## ⚡ Usage

```ts
try {
  throwAppError('API request failed', 'API_ERROR');
} catch (error) {
  logError(error, 'Error while fetching data');
}
```

**Console Output:**

```
❌ Error while fetching data: API request failed
Error Stack Trace...
```

If the error is not an instance of `Error`, `logError` will still log it properly:

```ts
logError('Unexpected non-error value');
```

---

## ❌ Incorrect Usage

```ts
const error = throwAppError('This will not work'); // ❌ Returns nothing because throwAppError always throws.
```

## ✅ Correct Usage

```ts
try {
  throwAppError('Something went wrong');
} catch (error) {
  logError(error);
}
```

---

## 🛠 How It Works

- `throwAppError` creates and throws a new `AppError` instance with the given message and optional code.
- `AppError` extends the native `Error` class and supports structured error information.
- `logError` checks if the error is an `Error` instance and logs appropriately, including stack traces when available.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
