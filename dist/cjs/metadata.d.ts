import { t } from 'tyne';
/**
 * Schema for image metadata.
 */
declare const ImagesSchema: import('tyne').TyneObject<{
    alt: import('tyne').TyneString;
    height: import('tyne').TyneOptional<number>;
    url: import('tyne').TyneString;
    width: import('tyne').TyneOptional<number>;
}>;
/**
 * Schema for general website metadata.
 */
declare const WebsiteSchema: import('tyne').TyneObject<{
    description: import('tyne').TyneString;
    images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>], import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>>;
    locale: import('tyne').TyneString;
    siteName: import('tyne').TyneString;
    title: import('tyne').TyneString;
    url: import('tyne').TyneString;
}>;
/**
 * Schema for book metadata, extending website metadata.
 */
declare const BookSchema: import('tyne').TyneObject<{
    description: import('tyne').TyneString;
    images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>], import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>>;
    locale: import('tyne').TyneString;
    siteName: import('tyne').TyneString;
    title: import('tyne').TyneString;
    url: import('tyne').TyneString;
    authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    isbn: import('tyne').TyneString;
    releaseDate: import('tyne').TyneString;
    tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
}>;
/**
 * Schema for article metadata, extending website metadata.
 */
declare const ArticleSchema: import('tyne').TyneObject<{
    description: import('tyne').TyneString;
    images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>], import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>>;
    locale: import('tyne').TyneString;
    siteName: import('tyne').TyneString;
    title: import('tyne').TyneString;
    url: import('tyne').TyneString;
    audio: import('tyne').TyneOptional<string>;
    authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    modifiedTime: import('tyne').TyneString;
    publishedTime: import('tyne').TyneString;
    section: import('tyne').TyneString;
    tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
}>;
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
declare const ReturnsSchema: <T extends Type_["type"]>(type: T) => import('tyne').TyneObject<{
    description: import('tyne').TyneString;
    icons: import('tyne').TyneObject<{
        icon: import('tyne').TyneString;
        shortcut: import('tyne').TyneString;
    }>;
    metadataBase: import('tyne').TyneInstanceOf<URL>;
    openGraph: import('tyne').TyneObject<{
        type: import('tyne').TyneLiteral<T>;
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
    } | {
        type: import('tyne').TyneLiteral<T>;
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
        authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        isbn: import('tyne').TyneString;
        releaseDate: import('tyne').TyneString;
        tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    } | {
        type: import('tyne').TyneLiteral<T>;
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
        audio: import('tyne').TyneOptional<string>;
        authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        modifiedTime: import('tyne').TyneString;
        publishedTime: import('tyne').TyneString;
        section: import('tyne').TyneString;
        tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    }>;
    title: import('tyne').TyneString;
}>;
/**
 * Schema of  GenerateMetadata.
 */
export declare const Schemas: {
    Article: import('tyne').TyneObject<{
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
        audio: import('tyne').TyneOptional<string>;
        authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        modifiedTime: import('tyne').TyneString;
        publishedTime: import('tyne').TyneString;
        section: import('tyne').TyneString;
        tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    }>;
    Book: import('tyne').TyneObject<{
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
        authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        isbn: import('tyne').TyneString;
        releaseDate: import('tyne').TyneString;
        tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
    }>;
    Images: import('tyne').TyneObject<{
        alt: import('tyne').TyneString;
        height: import('tyne').TyneOptional<number>;
        url: import('tyne').TyneString;
        width: import('tyne').TyneOptional<number>;
    }>;
    OpenGraph: import('tyne').TyneObject<{
        article: import('tyne').TyneObject<{
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
            audio: import('tyne').TyneOptional<string>;
            authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
            modifiedTime: import('tyne').TyneString;
            publishedTime: import('tyne').TyneString;
            section: import('tyne').TyneString;
            tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        }>;
        book: import('tyne').TyneObject<{
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
            authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
            isbn: import('tyne').TyneString;
            releaseDate: import('tyne').TyneString;
            tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        }>;
        website: import('tyne').TyneObject<{
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
        }>;
    }>;
    Returns: <T extends Type_["type"]>(type: T) => import('tyne').TyneObject<{
        description: import('tyne').TyneString;
        icons: import('tyne').TyneObject<{
            icon: import('tyne').TyneString;
            shortcut: import('tyne').TyneString;
        }>;
        metadataBase: import('tyne').TyneInstanceOf<URL>;
        openGraph: import('tyne').TyneObject<{
            type: import('tyne').TyneLiteral<T>;
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
        } | {
            type: import('tyne').TyneLiteral<T>;
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
            authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
            isbn: import('tyne').TyneString;
            releaseDate: import('tyne').TyneString;
            tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        } | {
            type: import('tyne').TyneLiteral<T>;
            description: import('tyne').TyneString;
            images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>], import('tyne').TyneObject<{
                alt: import('tyne').TyneString;
                height: import('tyne').TyneOptional<number>;
                url: import('tyne').TyneString;
                width: import('tyne').TyneOptional<number>;
            }>>;
            locale: import('tyne').TyneString;
            siteName: import('tyne').TyneString;
            title: import('tyne').TyneString;
            url: import('tyne').TyneString;
            audio: import('tyne').TyneOptional<string>;
            authors: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
            modifiedTime: import('tyne').TyneString;
            publishedTime: import('tyne').TyneString;
            section: import('tyne').TyneString;
            tags: import('tyne').TyneTuple<[import('tyne').TyneString], import('tyne').TyneString>;
        }>;
        title: import('tyne').TyneString;
    }>;
    Website: import('tyne').TyneObject<{
        description: import('tyne').TyneString;
        images: import('tyne').TyneTuple<[import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>], import('tyne').TyneObject<{
            alt: import('tyne').TyneString;
            height: import('tyne').TyneOptional<number>;
            url: import('tyne').TyneString;
            width: import('tyne').TyneOptional<number>;
        }>>;
        locale: import('tyne').TyneString;
        siteName: import('tyne').TyneString;
        title: import('tyne').TyneString;
        url: import('tyne').TyneString;
    }>;
};
/**
 * Types for Returns.
 */
type Returns<T extends Type_['type']> = t.infer<ReturnType<typeof ReturnsSchema<T>>>;
/**
 * Types for Metadata.
 */
export declare namespace Metadata {
    /** Possible OpenGraph content types. */
    type Type = Type_;
    /**
     * Types for image metadata.
     */
    type Images = t.infer<typeof ImagesSchema>;
    /**
     * Types for general website metadata.
     */
    type Website = t.infer<typeof WebsiteSchema>;
    /**
     * Types for article metadata, extends Website metadata.
     */
    type Article = t.infer<typeof ArticleSchema>;
    /**
     * Types for book metadata, extends Website metadata.
     */
    type Book = t.infer<typeof BookSchema>;
    namespace Return {
        type Website = Returns<'website'>;
        type Article = Returns<'article'>;
        type Book = Returns<'book'>;
        type Websites = Returns<'website'>[];
        type Articles = Returns<'article'>[];
        type Books = Returns<'book'>[];
    }
}
/**
 * Class for generating metadata for different types of content (website, book, article).
 * Each method generates metadata specific to a content type (website, book, or article).
 */
export declare abstract class GenerateMetadata {
    abstract prop: string;
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
    static article(meta: Metadata.Article): {
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            type: "article";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
        } | {
            type: "article";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            type: "article";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            audio: string | undefined;
            authors: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            tags: [string, ...string[]];
        };
        title: string;
    };
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
    static website(meta: Metadata.Website): {
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            type: "website";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
        } | {
            type: "website";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            type: "website";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            audio: string | undefined;
            authors: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            tags: [string, ...string[]];
        };
        title: string;
    };
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
    static book(meta: Metadata.Book): {
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            type: "book";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
        } | {
            type: "book";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            type: "book";
            description: string;
            images: [{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }, ...{
                alt: string;
                height: number | undefined;
                url: string;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            title: string;
            url: string;
            audio: string | undefined;
            authors: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            tags: [string, ...string[]];
        };
        title: string;
    };
}
export {};
