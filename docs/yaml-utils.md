# `YamlUtils` Class

`YamlUtils` is a utility class that simplifies working with YAML files in Node.js. It provides methods for reading and parsing YAML files, supporting both relative and absolute file paths, and ensures that any errors related to file reading or YAML parsing are properly handled.

## 📌 Features

- Reads and parses YAML files from both relative and absolute paths.
- Handles errors gracefully by logging and throwing detailed error messages.
- Ensures **type safety** when parsing YAML content into JavaScript objects.
- **Immutability**: Returns a parsed object without modifying the original file.

## 🚀 Installation

To use this utility in your project, follow these steps:

1. Install the utility package using **pnpm**, **npm**, or **yarn**:

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils
```

2. Import the `YamlUtils` class into your project:

```ts
import { YamlUtils } from '@estarlincito/utils';
```

## 🛠 Usage

### Method: `YamlUtils.parsed`

This method allows you to parse a YAML file and return its parsed data. It accepts both relative and absolute file paths.

#### Syntax:

```ts
static parsed(path: string): unknown
```

#### Parameters:

- `path` (string): The relative or absolute path to the YAML file.

#### Returns:

- The parsed YAML data, or throws an error if the file cannot be read or the YAML is invalid.

#### Example 1: Parsing a YAML File

```ts
import { YamlUtils } from '@estarlincito/utils';

const data = YamlUtils.parsed('/path/to/file.yaml');
console.log(data); // Parsed YAML content
```

#### Example 2: Handling Errors

If the YAML file cannot be read or contains invalid data, an error will be thrown:

```ts
try {
  const data = YamlUtils.parsed('/path/to/file.yaml');
  console.log(data);
} catch (error) {
  console.error('Error:', error);
}
```

## 🛠 How It Works

1. **`YamlUtils.parsed(path)`**:
   - Resolves the provided relative or absolute file path to an absolute one using `path.resolve()`.
   - Reads the YAML file's content with `fs.readFileSync()` and parses it using the `yaml` package.
   - If an error occurs (file reading or parsing), it is logged, and a custom error is thrown.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.  
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))
