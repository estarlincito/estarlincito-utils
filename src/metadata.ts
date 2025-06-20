/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { t } from 'tyne';

/**
 * Schema for image metadata.
 */
const ImagesSchema = t.object({
  alt: t.string(),
  height: t.number().optional(),
  url: t.string(),
  width: t.number().optional(),
});

/**
 * Schema for general website metadata.
 */
const WebsiteSchema = t.object({
  description: t.string(),
  images: t.tuple(ImagesSchema).rest(ImagesSchema),
  locale: t.string(),
  siteName: t.string(),
  title: t.string(),
  url: t.string(),
});

/**
 * Schema for book metadata, extending website metadata.
 */
const BookSchema = t.object({
  authors: t.tuple(t.string()).rest(t.string()),
  isbn: t.string(),
  releaseDate: t.string(),
  tags: t.tuple(t.string()).rest(t.string()),
  ...WebsiteSchema.shape,
});

/**
 * Schema for article metadata, extending website metadata.
 */
const ArticleSchema = t.object({
  audio: t.url().optional(),
  authors: t.tuple(t.string()).rest(t.string()),
  modifiedTime: t.string(),
  publishedTime: t.string(),
  section: t.string(),
  tags: t.tuple(t.string()).rest(t.string()),
  ...WebsiteSchema.shape,
});

/**
 * OpenGraph metadata schemas for different content types.
 */
const OpenGraphSchema = t.object({
  article: ArticleSchema,
  book: BookSchema,
  website: WebsiteSchema,
});

/**
 * Types for OpenGraph.
 */
type OpenGraph = t.infer<typeof OpenGraphSchema>;

/** Possible OpenGraph content types. */
type Type_ = {
  type: 'article' | 'website' | 'book';
};

/**
 * Schema generator for structured metadata.
 *
 * @template T - The OpenGraph content type (`'article' | 'website' | 'book'`).
 * @param {T} type - The type of content for metadata generation.
 */
const ReturnsSchema = <T extends Type_['type']>(type: T) =>
  t.object({
    description: t.string(),
    icons: t.object({
      icon: t.string(),
      shortcut: t.string(),
    }),

    metadataBase: t.instanceOf(URL),

    openGraph: t.object({
      ...OpenGraphSchema.shape[type].shape,
      type: t.literal(type),
    }),
    title: t.string(),
  });

/**
 * Schema of  GenerateMetadata.
 */
export const Schemas = {
  Article: ArticleSchema,
  Book: BookSchema,
  Images: ImagesSchema,
  OpenGraph: OpenGraphSchema,
  Returns: ReturnsSchema,
  Website: WebsiteSchema,
};

/**
 * Types for Returns.
 */
type Returns<T extends Type_['type']> = t.infer<
  ReturnType<typeof ReturnsSchema<T>>
>;

/**
 * Types for Metadata.
 */

export namespace Metadata {
  /** Possible OpenGraph content types. */
  export type Type = Type_;
  /**
   * Types for image metadata.
   */
  export type Images = t.infer<typeof ImagesSchema>;
  /**
   * Types for general website metadata.
   */
  export type Website = t.infer<typeof WebsiteSchema>;
  /**
   * Types for article metadata, extends Website metadata.
   */
  export type Article = t.infer<typeof ArticleSchema>;
  /**
   * Types for book metadata, extends Website metadata.
   */
  export type Book = t.infer<typeof BookSchema>;

  export namespace Return {
    export type Website = Returns<'website'>;
    export type Article = Returns<'article'>;
    export type Book = Returns<'book'>;
    export type Websites = Returns<'website'>[];
    export type Articles = Returns<'article'>[];
    export type Books = Returns<'book'>[];
  }
}

/**
 * Class for generating metadata for different types of content (website, book, article).
 * Each method generates metadata specific to a content type (website, book, or article).
 */
export abstract class GenerateMetadata {
  abstract prop: string;
  private static generate<T extends Type_['type']>(
    openGraph: OpenGraph[T],
    type: T,
  ): Returns<T> {
    const newImages = openGraph.images.map((image, index) => {
      const updatedImage = { ...image };
      if (index === 0 && image.height !== undefined) {
        updatedImage.height = 600;
      }

      if (index === 0 && image.width !== undefined) {
        updatedImage.width = 800;
      }
      return updatedImage;
    });

    return ReturnsSchema(type).validate({
      description: openGraph.description,
      icons: {
        icon: '/assets/favicons/favicon.ico',
        shortcut: '/assets/favicons/shortcut-icon.png',
      },
      metadataBase: new URL(openGraph.url),
      openGraph: {
        ...OpenGraphSchema.shape[type].validate({
          ...openGraph,
          images: newImages,
        }),
        type,
      },
      title: openGraph.title,
    });
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
   *   url: 'https://example.com/article',
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
  static article(meta: Metadata.Article) {
    return this.generate(meta, 'article');
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
   *   url: 'https://example.com/website',
   *   siteName: 'Example Site',
   *   locale: 'en-US',
   *   images: [{ url: '/assets/image1.jpg', alt: 'Website Image', width: 800, height: 600 }],
   * };
   * const metadata = GenerateMetadata.website(websiteMeta);
   */

  static website(meta: Metadata.Website) {
    return this.generate(meta, 'website');
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
   *   url: 'https://example.com/book',
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
  static book(meta: Metadata.Book) {
    return this.generate(meta, 'book');
  }
}

// x and google support and more
