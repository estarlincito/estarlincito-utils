/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { z } from 'zod';

/**
 * Schema for image metadata.
 */
const ImagesSchema = z.object({
  alt: z.string(),
  height: z.number().optional(),
  url: z.string(),
  width: z.number().optional(),
});

/**
 * Types for image metadata.
 */
type Images = z.infer<typeof ImagesSchema>;

/**
 * Schema for general website metadata.
 */
const WebsiteSchema = z.object({
  description: z.string(),
  images: z.tuple([ImagesSchema]).rest(ImagesSchema),
  locale: z.string().default('en-US'),
  siteName: z.string(),
  title: z.string(),
  url: z.string(),
});

/**
 * Types for general website metadata.
 */
type Website = z.infer<typeof WebsiteSchema>;

/**
 * Schema for book metadata, extending website metadata.
 */
const BookSchema = z
  .object({
    authors: z.tuple([z.string()]).rest(z.string()),
    isbn: z.string(),
    releaseDate: z.string(),
    tags: z.tuple([z.string()]).rest(z.string()),
  })
  .merge(WebsiteSchema);

/**
 * Types for book metadata, extends Website metadata.
 */
type Book = z.infer<typeof BookSchema>;

/**
 * Schema for article metadata, extending website metadata.
 */
const ArticleSchema = z
  .object({
    audio: z.string().url().optional(),
    authors: z.tuple([z.string()]).rest(z.string()),
    modifiedTime: z.string(),
    publishedTime: z.string(),
    section: z.string(),
    tags: z.tuple([z.string()]).rest(z.string()),
  })
  .merge(WebsiteSchema);

/**
 * Types for article metadata, extends Website metadata.
 */
type Article = z.infer<typeof ArticleSchema>;

/** Possible OpenGraph content types. */
type Type = {
  type: 'article' | 'website' | 'book';
};

/**
 * OpenGraph metadata schemas for different content types.
 */
const OpenGraphSchema = z.object({
  article: ArticleSchema,
  book: BookSchema,
  website: WebsiteSchema,
});

/**
 * Types for OpenGraph.
 */
type OpenGraph = z.infer<typeof OpenGraphSchema>;

/**
 * Schema generator for structured metadata.
 *
 * @template T - The OpenGraph content type (`'article' | 'website' | 'book'`).
 * @param {T} type - The type of content for metadata generation.
 */
const ReturnsSchema = <T extends Type['type']>(type: T) => {
  return z.object({
    description: z.string(),
    icons: z.object({
      icon: z.string(),
      shortcut: z.string(),
    }),
    metadataBase: z.instanceof(URL),
    openGraph: z
      .object({ type: z.literal(type) })
      .merge(OpenGraphSchema.shape[type]),
    title: z.string(),
  });
};

/**
 * Types for Returns.
 */
type Returns<T extends Type['type']> = z.infer<
  ReturnType<typeof ReturnsSchema<T>>
>;

/**
 * Types for GenerateMetadataTypes.
 */
export interface GenerateMetadataTypes {
  Type: Type;
  Images: Images;
  Website: Website;
  Article: Article;
  Book: Book;
  ReturnsWebsite: Returns<'website'>;
  ReturnsArticle: Returns<'article'>;
  ReturnsBook: Returns<'book'>;
  ReturnsWebsites: Returns<'website'>[];
  ReturnsArticles: Returns<'article'>[];
  ReturnsBooks: Returns<'book'>[];
}

/**
 * Class for generating metadata for different types of content (website, book, article).
 * Each method generates metadata specific to a content type (website, book, or article).
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class GenerateMetadata {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  private static generate<T extends Type['type']>(
    openGraph: OpenGraph[T],
    type: T,
  ): Returns<T> {
    const newImages = openGraph.images.map((image) => {
      if (!image.height) {
        image.height = 600;
      }
      if (!image.width) {
        image.width = 800;
      }
      return image;
    }) as typeof openGraph.images;

    openGraph.images = newImages;

    return ReturnsSchema(type).parse({
      description: openGraph.description,
      icons: {
        icon: '/assets/favicons/favicon.ico',
        shortcut: '/assets/favicons/shortcut-icon.png',
      },
      metadataBase: new URL(openGraph.url),
      openGraph: { ...OpenGraphSchema.shape[type].parse(openGraph), type },
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
  static article(meta: Article) {
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

  static website(meta: Website) {
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
  static book(meta: Book) {
    return this.generate(meta, 'book');
  }
}

//x and google support and more
