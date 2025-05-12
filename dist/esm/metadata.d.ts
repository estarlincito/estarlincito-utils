import { z } from 'zod';
/**
 * Schema for image metadata.
 */
declare const ImagesSchema: z.ZodObject<{
    alt: z.ZodString;
    height: z.ZodOptional<z.ZodNumber>;
    url: z.ZodString;
    width: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    url: string;
    alt: string;
    height?: number | undefined;
    width?: number | undefined;
}, {
    url: string;
    alt: string;
    height?: number | undefined;
    width?: number | undefined;
}>;
/**
 * Schema for general website metadata.
 */
declare const WebsiteSchema: z.ZodObject<{
    description: z.ZodString;
    images: z.ZodTuple<[z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>], z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>>;
    locale: z.ZodDefault<z.ZodString>;
    siteName: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    locale: string;
    siteName: string;
}, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    siteName: string;
    locale?: string | undefined;
}>;
/**
 * Schema for book metadata, extending website metadata.
 */
declare const BookSchema: z.ZodObject<{
    authors: z.ZodTuple<[z.ZodString], z.ZodString>;
    isbn: z.ZodString;
    releaseDate: z.ZodString;
    tags: z.ZodTuple<[z.ZodString], z.ZodString>;
} & {
    description: z.ZodString;
    images: z.ZodTuple<[z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>], z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>>;
    locale: z.ZodDefault<z.ZodString>;
    siteName: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    locale: string;
    siteName: string;
    authors: [string, ...string[]];
    isbn: string;
    releaseDate: string;
    tags: [string, ...string[]];
}, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    siteName: string;
    authors: [string, ...string[]];
    isbn: string;
    releaseDate: string;
    tags: [string, ...string[]];
    locale?: string | undefined;
}>;
/**
 * Schema for article metadata, extending website metadata.
 */
declare const ArticleSchema: z.ZodObject<{
    audio: z.ZodOptional<z.ZodString>;
    authors: z.ZodTuple<[z.ZodString], z.ZodString>;
    modifiedTime: z.ZodString;
    publishedTime: z.ZodString;
    section: z.ZodString;
    tags: z.ZodTuple<[z.ZodString], z.ZodString>;
} & {
    description: z.ZodString;
    images: z.ZodTuple<[z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>], z.ZodObject<{
        alt: z.ZodString;
        height: z.ZodOptional<z.ZodNumber>;
        url: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, {
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }>>;
    locale: z.ZodDefault<z.ZodString>;
    siteName: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    locale: string;
    siteName: string;
    authors: [string, ...string[]];
    tags: [string, ...string[]];
    modifiedTime: string;
    publishedTime: string;
    section: string;
    audio?: string | undefined;
}, {
    url: string;
    title: string;
    description: string;
    images: [{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }, ...{
        url: string;
        alt: string;
        height?: number | undefined;
        width?: number | undefined;
    }[]];
    siteName: string;
    authors: [string, ...string[]];
    tags: [string, ...string[]];
    modifiedTime: string;
    publishedTime: string;
    section: string;
    locale?: string | undefined;
    audio?: string | undefined;
}>;
type _Image = {
    alt: string;
    url: string;
    height: 600;
    width: 800;
};
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
declare const ReturnsSchema: <T extends Type_["type"]>(type: T) => z.ZodObject<{
    description: z.ZodString;
    icons: z.ZodObject<{
        icon: z.ZodString;
        shortcut: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        icon: string;
        shortcut: string;
    }, {
        icon: string;
        shortcut: string;
    }>;
    metadataBase: z.ZodType<URL, z.ZodTypeDef, URL>;
    openGraph: z.ZodEffects<z.ZodObject<{
        audio: z.ZodOptional<z.ZodString>;
        authors: z.ZodTuple<[z.ZodString], z.ZodString>;
        modifiedTime: z.ZodString;
        publishedTime: z.ZodString;
        section: z.ZodString;
        tags: z.ZodTuple<[z.ZodString], z.ZodString>;
    } & {
        description: z.ZodString;
        images: z.ZodTuple<[z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>], z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>>;
        locale: z.ZodDefault<z.ZodString>;
        siteName: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        audio?: string | undefined;
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        locale?: string | undefined;
        audio?: string | undefined;
    }>, {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        audio?: string | undefined;
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        locale?: string | undefined;
        audio?: string | undefined;
    }> | z.ZodEffects<z.ZodObject<{
        authors: z.ZodTuple<[z.ZodString], z.ZodString>;
        isbn: z.ZodString;
        releaseDate: z.ZodString;
        tags: z.ZodTuple<[z.ZodString], z.ZodString>;
    } & {
        description: z.ZodString;
        images: z.ZodTuple<[z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>], z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>>;
        locale: z.ZodDefault<z.ZodString>;
        siteName: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
        locale?: string | undefined;
    }>, {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        audio?: string | undefined;
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
        locale?: string | undefined;
    }> | z.ZodEffects<z.ZodObject<{
        description: z.ZodString;
        images: z.ZodTuple<[z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>], z.ZodObject<{
            alt: z.ZodString;
            height: z.ZodOptional<z.ZodNumber>;
            url: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, {
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }>>;
        locale: z.ZodDefault<z.ZodString>;
        siteName: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        locale: string;
        siteName: string;
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        locale?: string | undefined;
    }>, {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        audio?: string | undefined;
    }, {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        locale?: string | undefined;
    }>;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    icons: {
        icon: string;
        shortcut: string;
    };
    metadataBase: URL;
    openGraph: {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
    } | {
        images: [_Image, ..._Image[]];
        type: T;
        url: string;
        title: string;
        description: string;
        locale: string;
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        audio?: string | undefined;
    };
}, {
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
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        locale?: string | undefined;
    } | {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        isbn: string;
        releaseDate: string;
        tags: [string, ...string[]];
        locale?: string | undefined;
    } | {
        url: string;
        title: string;
        description: string;
        images: [{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }, ...{
            url: string;
            alt: string;
            height?: number | undefined;
            width?: number | undefined;
        }[]];
        siteName: string;
        authors: [string, ...string[]];
        tags: [string, ...string[]];
        modifiedTime: string;
        publishedTime: string;
        section: string;
        locale?: string | undefined;
        audio?: string | undefined;
    };
}>;
/**
 * Types for Returns.
 */
type Returns<T extends Type_['type']> = z.infer<ReturnType<typeof ReturnsSchema<T>>>;
/**
 * Types for Metadata.
 */
export declare namespace Metadata {
    /** Possible OpenGraph content types. */
    type Type = Type_;
    /**
     * Types for image metadata.
     */
    type Images = z.infer<typeof ImagesSchema>;
    /**
     * Types for general website metadata.
     */
    type Website = z.infer<typeof WebsiteSchema>;
    /**
     * Types for article metadata, extends Website metadata.
     */
    type Article = z.infer<typeof ArticleSchema>;
    /**
     * Types for book metadata, extends Website metadata.
     */
    type Book = z.infer<typeof BookSchema>;
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
    static article(meta: Metadata.Article): {
        title: string;
        description: string;
        icons: {
            icon: string;
            shortcut: string;
        };
        metadataBase: URL;
        openGraph: {
            images: [_Image, ..._Image[]];
            type: "article";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
        } | {
            images: [_Image, ..._Image[]];
            type: "article";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            images: [_Image, ..._Image[]];
            type: "article";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            tags: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            audio?: string | undefined;
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
            images: [_Image, ..._Image[]];
            type: "website";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
        } | {
            images: [_Image, ..._Image[]];
            type: "website";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            images: [_Image, ..._Image[]];
            type: "website";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            tags: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            audio?: string | undefined;
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
            images: [_Image, ..._Image[]];
            type: "book";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
        } | {
            images: [_Image, ..._Image[]];
            type: "book";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
        } | {
            images: [_Image, ..._Image[]];
            type: "book";
            url: string;
            title: string;
            description: string;
            locale: string;
            siteName: string;
            authors: [string, ...string[]];
            tags: [string, ...string[]];
            modifiedTime: string;
            publishedTime: string;
            section: string;
            audio?: string | undefined;
        };
    };
}
export {};
