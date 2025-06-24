import { t } from 'tyne';
/**
 * Schema for image metadata.
 */
declare const ImagesSchema: t.TyneObject<{
    alt: t.TyneString;
    height: t.TyneType<number | undefined>;
    url: t.TyneString;
    width: t.TyneType<number | undefined>;
}>;
/**
 * Schema for general website metadata.
 */
declare const WebsiteSchema: t.TyneObject<{
    description: t.TyneString;
    images: t.TyneTuple<[t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>], t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>>;
    locale: t.TyneString;
    siteName: t.TyneString;
    title: t.TyneString;
    url: t.TyneString;
}>;
/**
 * Schema for book metadata, extending website metadata.
 */
declare const BookSchema: t.TyneObject<{
    description: t.TyneString;
    images: t.TyneTuple<[t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>], t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>>;
    locale: t.TyneString;
    siteName: t.TyneString;
    title: t.TyneString;
    url: t.TyneString;
    authors: t.TyneTuple<[t.TyneString], t.TyneString>;
    isbn: t.TyneString;
    releaseDate: t.TyneString;
    tags: t.TyneTuple<[t.TyneString], t.TyneString>;
}>;
/**
 * Schema for article metadata, extending website metadata.
 */
declare const ArticleSchema: t.TyneObject<{
    description: t.TyneString;
    images: t.TyneTuple<[t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>], t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>>;
    locale: t.TyneString;
    siteName: t.TyneString;
    title: t.TyneString;
    url: t.TyneString;
    audio: t.TyneType<string | undefined>;
    authors: t.TyneTuple<[t.TyneString], t.TyneString>;
    modifiedTime: t.TyneString;
    publishedTime: t.TyneString;
    section: t.TyneString;
    tags: t.TyneTuple<[t.TyneString], t.TyneString>;
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
declare const ReturnsSchema: <T extends Type_["type"]>(type: T) => t.TyneObject<{
    description: t.TyneString;
    icons: t.TyneObject<{
        icon: t.TyneString;
        shortcut: t.TyneString;
    }>;
    metadataBase: t.TyneInstanceof<URL>;
    openGraph: t.TyneObject<{
        type: t.TyneLiteral<T>;
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
    } | {
        type: t.TyneLiteral<T>;
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
        authors: t.TyneTuple<[t.TyneString], t.TyneString>;
        isbn: t.TyneString;
        releaseDate: t.TyneString;
        tags: t.TyneTuple<[t.TyneString], t.TyneString>;
    } | {
        type: t.TyneLiteral<T>;
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
        audio: t.TyneType<string | undefined>;
        authors: t.TyneTuple<[t.TyneString], t.TyneString>;
        modifiedTime: t.TyneString;
        publishedTime: t.TyneString;
        section: t.TyneString;
        tags: t.TyneTuple<[t.TyneString], t.TyneString>;
    }>;
    title: t.TyneString;
}>;
/**
 * Schema of  GenerateMetadata.
 */
export declare const Schemas: {
    Article: t.TyneObject<{
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
        audio: t.TyneType<string | undefined>;
        authors: t.TyneTuple<[t.TyneString], t.TyneString>;
        modifiedTime: t.TyneString;
        publishedTime: t.TyneString;
        section: t.TyneString;
        tags: t.TyneTuple<[t.TyneString], t.TyneString>;
    }>;
    Book: t.TyneObject<{
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
        authors: t.TyneTuple<[t.TyneString], t.TyneString>;
        isbn: t.TyneString;
        releaseDate: t.TyneString;
        tags: t.TyneTuple<[t.TyneString], t.TyneString>;
    }>;
    Images: t.TyneObject<{
        alt: t.TyneString;
        height: t.TyneType<number | undefined>;
        url: t.TyneString;
        width: t.TyneType<number | undefined>;
    }>;
    OpenGraph: t.TyneObject<{
        article: t.TyneObject<{
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
            audio: t.TyneType<string | undefined>;
            authors: t.TyneTuple<[t.TyneString], t.TyneString>;
            modifiedTime: t.TyneString;
            publishedTime: t.TyneString;
            section: t.TyneString;
            tags: t.TyneTuple<[t.TyneString], t.TyneString>;
        }>;
        book: t.TyneObject<{
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
            authors: t.TyneTuple<[t.TyneString], t.TyneString>;
            isbn: t.TyneString;
            releaseDate: t.TyneString;
            tags: t.TyneTuple<[t.TyneString], t.TyneString>;
        }>;
        website: t.TyneObject<{
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
        }>;
    }>;
    Returns: <T extends Type_["type"]>(type: T) => t.TyneObject<{
        description: t.TyneString;
        icons: t.TyneObject<{
            icon: t.TyneString;
            shortcut: t.TyneString;
        }>;
        metadataBase: t.TyneInstanceof<URL>;
        openGraph: t.TyneObject<{
            type: t.TyneLiteral<T>;
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
        } | {
            type: t.TyneLiteral<T>;
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
            authors: t.TyneTuple<[t.TyneString], t.TyneString>;
            isbn: t.TyneString;
            releaseDate: t.TyneString;
            tags: t.TyneTuple<[t.TyneString], t.TyneString>;
        } | {
            type: t.TyneLiteral<T>;
            description: t.TyneString;
            images: t.TyneTuple<[t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>], t.TyneObject<{
                alt: t.TyneString;
                height: t.TyneType<number | undefined>;
                url: t.TyneString;
                width: t.TyneType<number | undefined>;
            }>>;
            locale: t.TyneString;
            siteName: t.TyneString;
            title: t.TyneString;
            url: t.TyneString;
            audio: t.TyneType<string | undefined>;
            authors: t.TyneTuple<[t.TyneString], t.TyneString>;
            modifiedTime: t.TyneString;
            publishedTime: t.TyneString;
            section: t.TyneString;
            tags: t.TyneTuple<[t.TyneString], t.TyneString>;
        }>;
        title: t.TyneString;
    }>;
    Website: t.TyneObject<{
        description: t.TyneString;
        images: t.TyneTuple<[t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>], t.TyneObject<{
            alt: t.TyneString;
            height: t.TyneType<number | undefined>;
            url: t.TyneString;
            width: t.TyneType<number | undefined>;
        }>>;
        locale: t.TyneString;
        siteName: t.TyneString;
        title: t.TyneString;
        url: t.TyneString;
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
        title: string;
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            url: string;
            title: string;
            description: string;
            images: [{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }, ...{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            type: "article";
        };
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
        title: string;
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            url: string;
            title: string;
            description: string;
            images: [{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }, ...{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            type: "website";
        };
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
        title: string;
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            url: string;
            title: string;
            description: string;
            images: [{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }, ...{
                url: string;
                alt: string;
                height: number | undefined;
                width: number | undefined;
            }[]];
            locale: string;
            siteName: string;
            type: "book";
        };
    };
}
export {};
