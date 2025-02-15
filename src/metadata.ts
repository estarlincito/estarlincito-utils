/**
 * Interface for image metadata.
 */
export interface Images {
  url: string;
  alt: string;
  width: number | 800;
  height: number | 600;
}
/**
 * Interface for general website metadata.
 */
export interface Website {
  title: string;
  description: string;
  url: URL;
  siteName: string;
  locale: 'en-US' | string;
  images: [Images, ...Images[]];
}
/**
 * Interface for book metadata, extends Website metadata.
 */
export interface Book extends Website {
  isbn: string;
  releaseDate: string;
  tags: [string, ...string[]];
  authors: [string, ...string[]];
}
/**
 * Interface for article metadata, extends Website metadata.
 */
export interface Article extends Website {
  section: string;
  publishedTime: string;
  modifiedTime: string;
  audio?: URL;
  tags: [string, ...string[]];
  authors: [string, ...string[]];
}

/**
 * Union type for website, book, and article metadata.
 */
export type Meta = Website | Book | Article;
/**
 * Type representing the metadata returned after generation.
 */
export type Returns<M> = {
  title: string;
  description: string;
  metadataBase: URL;
  openGraph: M;
  icons: {
    icon: string;
    shortcut: string;
  };
};

/**
 * Class for generating metadata for different types of content (website, book, article).
 * Each method generates metadata specific to a content type (website, book, or article).
 */
export class GenerateMetadata {
  private static generate<M extends Website, T>(meta: M, type: T): Returns<M> {
    return {
      title: meta.title,
      description: meta.description,
      metadataBase: meta.url,
      openGraph: { ...meta, type } as M,
      icons: {
        icon: '/assets/favicons/favicon.ico',
        shortcut: '/assets/favicons/shortcut-icon.png',
      },
    };
  }
  /**
   * Generates metadata specifically for an article.
   *
   * @param meta - The article metadata.
   * @returns - The generated metadata for the article.
   *
   * @example
   * const articleMeta: Article = {
   *   title: 'Example Article Title',
   *   description: 'Description for the article.',
   *   url: new URL('https://example.com/article'),
   *   siteName: 'Example Site',
   *   locale: 'en-US',
   *   images: [{ url: '/assets/image1.jpg', alt: 'Article Image', width: 800, height: 600 }],
   *   section: 'Tech News',
   *   publishedTime: '2025-02-12T15:09:16Z',
   *   modifiedTime: '2025-02-12T16:00:00Z',
   *   authors: ['Author One'],
   *   audio: new URL('/assets/audio.mp3'),
   * };
   * const metadata = GenerateMetadata.article(articleMeta);
   */
  static article(meta: Article) {
    return this.generate(meta, 'article' as const);
  }
  /**
   * Generates metadata specifically for a website.
   *
   * @param meta - The website metadata.
   * @returns - The generated metadata for the website.
   *
   * @example
   * const websiteMeta: Website = {
   *   title: 'Example Website Title',
   *   description: 'Description for the website.',
   *   url: new URL('https://example.com/website'),
   *   siteName: 'Example Site',
   *   locale: 'en-US',
   *   images: [{ url: '/assets/image1.jpg', alt: 'Website Image', width: 800, height: 600 }],
   * };
   * const metadata = GenerateMetadata.website(websiteMeta);
   */

  static website(meta: Website) {
    return this.generate(meta, 'website' as const);
  }

  /**
   * Generates metadata specifically for a book.
   *
   * @param meta - The book metadata.
   * @returns - The generated metadata for the book.
   *
   * @example
   * const bookMeta: Book = {
   *   title: 'Example Book Title',
   *   description: 'Description for the book.',
   *   url: new URL('https://example.com/book'),
   *   siteName: 'Example Site',
   *   locale: 'en-US',
   *   images: [{ url: '/assets/image1.jpg', alt: 'Book Cover Image', width: 800, height: 600 }],
   *   isbn: '978-3-16-148410-0',
   *   authors: ['Author One', 'Author Two'],
   *   releaseDate: '2025-02-12',
   *   tags: ['Fiction', 'Adventure'],
   * };
   * const metadata = GenerateMetadata.book(bookMeta);
   */
  static book(meta: Book) {
    return this.generate(meta, 'book' as const);
  }
}

//x and google support and more
