# isDev Utility Function

The `isDev` function checks if the current environment is set to "development" based on the provided `NODE_ENV` string. This utility is useful for conditionally handling logic or configurations specific to the development environment.

## 📌 Features

• Checks if the environment is "development" based on `NODE_ENV`.
• Returns a boolean indicating whether the app is in development mode.
• Useful for conditional environment-specific logic.

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

2.Import the function in your project:

```ts
import { isDev } from '@estarlincito/utils';
```

**⚡ Usage**  
The isDev function allows you to check if the current environment is development. It is typically used to differentiate between development and production behavior in your application.  
**Example 1: Check if Environment is Development**

```ts
const NODE_ENV = 'development';
if (isDev(NODE_ENV)) {
  console.log('You are in development mode');
} else {
  console.log('You are not in development mode');
}
```

**Example 2: Conditional Logic for Development Environment**

```ts
const NODE_ENV = 'production';
if (isDev(NODE_ENV)) {
  // Development-specific code
  console.log('Running in development mode');
} else {
  // Production-specific code
  console.log('Running in production mode');
}
```

**❌ Incorrect Usage**

```ts
const NODE_ENV = 'staging';
if (isDev(NODE_ENV)) {
  // The result will be false, as NODE_ENV is not 'development'
  console.log('Development mode');
}
```

**✅ Correct Usage**

```ts
const NODE_ENV = 'development';
if (isDev(NODE_ENV)) {
  // ✅ Returns true
  console.log('Development mode');
}
```

## How It Works

• Accepts a NODE_ENV string to check if it matches the “development” environment.  
• Returns true if NODE_ENV is “development”, otherwise false.  
• Can be used to enable/disable certain features based on the environment.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.  
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))
