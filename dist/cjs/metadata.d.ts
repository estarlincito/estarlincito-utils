/**
 * Interface for image metadata.
 */
interface Images {
    url: string;
    alt: string;
    width?: number;
    height?: number;
}
/**
 * Interface for general website metadata.
 */
interface Website {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: 'en-US' | string;
    images: [Images, ...Images[]];
}
/**
 * Interface for book metadata, extends Website metadata.
 */
interface Book extends Website {
    isbn: string;
    releaseDate: string;
    tags: [string, ...string[]];
    authors: [string, ...string[]];
}
/**
 * Interface for article metadata, extends Website metadata.
 */
interface Article extends Website {
    section: string;
    publishedTime: string;
    modifiedTime: string;
    audio?: URL;
    tags: [string, ...string[]];
    authors: [string, ...string[]];
}
interface Type {
    type: 'article' | 'website' | 'book';
}
/**
 * Union type for website, book, and article metadata.
 */
/**
 * Type representing the metadata returned after generation.
 */
interface Returns<M> {
    title: string;
    description: string;
    metadataBase: URL;
    openGraph: M;
    icons: {
        icon: string;
        shortcut: string;
    };
}
type ReturnsWithType<T> = Returns<T & Type>;
export interface GenerateMetadataTypes {
    Type: Type;
    Images: Images;
    Website: Website;
    Article: Article;
    Book: Book;
    ReturnsWebsite: ReturnsWithType<Website>;
    ReturnsArticle: ReturnsWithType<Article>;
    ReturnsBook: ReturnsWithType<Book>;
    ReturnsWebsites: ReturnsWithType<Website[]>;
    ReturnsArticles: ReturnsWithType<Article[]>;
    ReturnsBooks: ReturnsWithType<Book[]>;
}
/**
 * Class for generating metadata for different types of content (website, book, article).
 * Each method generates metadata specific to a content type (website, book, or article).
 */
export declare class GenerateMetadata {
    private constructor();
    private static generate;
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
    static article(meta: Article): Returns<Article & Type>;
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
    static website(meta: Website): Returns<Website & Type>;
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
    static book(meta: Book): Returns<Book & Type>;
}
export {};
