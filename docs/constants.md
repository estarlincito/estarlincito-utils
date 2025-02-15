# Constants Utility Class

The `Constants` utility class provides a structured way to manage constant data for a website or app. It allows for the creation of instances that contain metadata about a site, along with any custom data through generics.

## 📌 Features

• Manages metadata for websites or apps (e.g., title, route, description, locale, site name).  
• Supports extension with custom data through generics.  
• Automatically converts route strings into `URL` objects for easier handling of URLs.  
• Provides a flexible `create` method that returns an instance with both required and custom data.

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

2. Import the class in your project:

```ts
import { Constants } from '@estarlincito/utils';
```

## ⚡ Usage

The `Constants` class provides a `create` method that accepts a `Data` object along with any custom properties. The `route` property is automatically converted into a `URL` object.

### Example 1: Creating a Constants Object with Custom Properties

```ts
const data = Constants.create({
  title: 'My Website',
  route: 'https://example.com/home',
  description: 'Welcome to my website',
  locale: 'en-US',
  siteName: 'ExampleSite',
  customProperty: 'value',
});

console.log(data.title); // Output: "My Website"
console.log(data.customProperty); // Output: "value"
console.log(data.route); // Output: URL { href: 'https://example.com/home', ... }
```

### Example 2: Accessing Data from the Constants Object

```ts
console.log(data.title); // Output: "My Website"
console.log(data.siteName); // Output: "ExampleSite"
console.log(data.path); // Output: "/home"
```

## 🛠 How It Works

• The `Constants` class is designed to be used with the `create` method, which accepts data that extends the `Data` interface.  
• The `create` method automatically converts the `route` string into a `URL` object for easier manipulation.  
• The method returns a new instance with the provided data and additional properties, including the `path` property, which is derived from the `route`.  
• The class is generic, allowing you to extend it with custom properties specific to your needs.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
