# GenerateMetadata Utility Class

The GenerateMetadata class provides a structured way to generate metadata for different types of content, such as websites, books, and articles. It ensures that metadata is properly formatted for SEO and social media sharing.

## 📌 Features

•Generates metadata for websites, books, and articles.  
•Supports Open Graph metadata structure.  
•Ensures consistency across different content types.  
•Provides icons for better site branding.  
•Returns a structured object ready for integration.

## 🚀 Installation

To use this utility in your project, install it via pnpm, npm, or yarn if packaged as a module.

```bash
pnpm add @estarlincito/utils
# or
npm install @estarlincito/utils
# or
yarn add @estarlincito/utils

```

## 📦 Importing the Class

```
import { GenerateMetadata } from '@estarlincito/utils';

```

## ⚡ Usage

The GenerateMetadata class structures metadata based on the given content type.  
**Example 1: Website Metadata**

```ts
const websiteMeta: Website = {
  title: 'My Website',
  description: 'An awesome website.',
  url: new URL('https://example.com'),
  siteName: 'Example',
  locale: 'en-US',
  images: [
    {
      url: 'https://example.com/image.jpg',
      alt: 'Example Image',
      width: 800,
      height: 600,
    },
  ],
};

const metadata = GenerateMetadata.website(websiteMeta);
console.log(metadata);
```

**Example 2: Book Metadata**

```ts
const bookMeta: Book = {
  title: 'My Book',
  description: 'A great book to read.',
  url: new URL('https://example.com/book'),
  siteName: 'Bookstore',
  locale: 'en-US',
  images: [
    {
      url: 'https://example.com/book-cover.jpg',
      alt: 'Book Cover',
      width: 800,
      height: 600,
    },
  ],
  isbn: '978-3-16-148410-0',
  authors: ['John Doe'],
  releaseDate: '2025-02-12',
  tags: ['Fiction', 'Adventure'],
};

const metadata = GenerateMetadata.book(bookMeta);
console.log(metadata);
```

**Example 3: Article Metadata**

```ts
const articleMeta: Article = {
  title: 'Tech Trends 2025',
  description: 'The future of technology.',
  url: new URL('https://example.com/article'),
  siteName: 'Tech Blog',
  locale: 'en-US',
  images: [
    {
      url: 'https://example.com/article-image.jpg',
      alt: 'Tech Image',
      width: 800,
      height: 600,
    },
  ],
  tags: ['Technology', 'AI'],
  section: 'Tech',
  publishedTime: '2025-02-12T10:00:00Z',
  modifiedTime: '2025-02-12T12:00:00Z',
  authors: ['Jane Doe'],
  audio: new URL('https://example.com/podcast.mp3'),
};

const metadata = GenerateMetadata.article(articleMeta);
console.log(metadata);
```

**❌ Incorrect Usage**

```ts
const metadata = GenerateMetadata.article({ title: 'Missing URL' }); // ❌ Error: Missing required fields
```

**✅ Correct Usage**

```ts
const metadata = GenerateMetadata.website(websiteMeta); // ✅ Valid metadata object
```

## 🛠 How It Works

•Accepts a metadata object with properties like title, description, url, images, etc.  
•Uses Open Graph metadata to structure content for SEO and social sharing.  
•Supports multiple content types (website, book, article).  
•Ensures immutability by creating a new structured metadata object.

## ⚠️ IMPORTANT: Ensure that the following files exist in your project:

•/assets/favicons/favicon.ico  
•/assets/favicons/shortcut-icon.png

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.  
**Author:** Estarlin R ( [estarlincito.com](https://estarlincito.com))
