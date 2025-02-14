export interface Images {
    url: string;
    alt: string;
    width: number | 800;
    height: number | 600;
}
export interface Website {
    title: string;
    description: string;
    url: URL;
    siteName: string;
    locale: 'en-US' | string;
    images: [Images, ...Images[]];
}
export interface Book extends Website {
    isbn: string;
    releaseDate: string;
    tags: [string, ...string[]];
    authors: [string, ...string[]];
}
export interface Article extends Website {
    section: string;
    publishedTime: string;
    modifiedTime: string;
    audio?: URL;
    tags: [string, ...string[]];
    authors: [string, ...string[]];
}
export type Meta = Website | Book | Article;
export type Returns = {
    title: string;
    description: string;
    metadataBase: URL;
    openGraph: Meta;
    icons: {
        icon: string;
        shortcut: string;
    };
};
/**
 * Generates metadata for the given content using the `GenerateMetadata` class.
 *
 * ⚠️ **IMPORTANT**: Ensure that the following files exist in your project:
 *    - `public/assets/favicons/favicon.ico`
 *    - `public/assets/favicons/shortcut-icon.png`
 *
 * @param meta - The metadata object.
 * @returns The generated metadata.
 *
 * @example
 * // Example for type: 'website'
 * const websiteMeta: Website = {
 *   title: 'Example Website Title',
 *   description: 'Description for the website.',
 *   url: toURL('https://example.com/website')!,
 *   siteName: 'Example Site',
 *   locale: 'en-US',
 *   images: [
 *     {
 *       url: '/assets/image1.jpg',
 *       alt: 'Website Image',
 *       width: 800,
 *       height: 600,
 *     },
 *   ],
 * };
 * const metadata = GenerateMetadata.website(websiteMeta);
 *
 * @example
 * // Example for type: 'book'
 * const bookMeta: Book = {
 *   title: 'Example Book Title',
 *   description: 'Description for the book.',
 *   url: toURL('https://example.com/book')!,
 *   siteName: 'Example Site',
 *   locale: 'en-US',
 *   images: [
 *     {
 *       url: '/assets/image1.jpg',
 *       alt: 'Book Cover Image',
 *       width: 800,
 *       height: 600,
 *     },
 *   ],
 *   isbn: '978-3-16-148410-0',
 *   authors: ['Author One', 'Author Two'],
 *   releaseDate: '2025-02-12',
 *   tags: ['Fiction', 'Adventure'],
 * };
 * const metadata = GenerateMetadata.book(bookMeta);
 *
 * @example
 * // Example for type: 'article'
 * const articleMeta: Article = {
 *   title: 'Example Article Title',
 *   description: 'Description for the article.',
 *   url: toURL('https://example.com/article')!,
 *   siteName: 'Example Site',
 *   locale: 'en-US',
 *   images: [
 *     {
 *       url: '/assets/image1.jpg',
 *       alt: 'Article Image',
 *       width: 800,
 *       height: 600,
 *     },
 *   ],
 *   tags: ['Technology', 'AI'],
 *   section: 'Tech News',
 *   publishedTime: '2025-02-12T15:09:16Z',
 *   modifiedTime: '2025-02-12T16:00:00Z',
 *   authors: ['Author One'],
 *   audio: toURL('/assets/audio.mp3'),
 * };
 * const metadata = GenerateMetadata.article(articleMeta);
 */
export declare class GenerateMetadata {
    private static generate;
    static article(meta: Article): {
        title: string;
        description: string;
        metadataBase: URL;
        openGraph: {
            type: "website" | "Article" | "book";
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            section: string;
            publishedTime: string;
            modifiedTime: string;
            audio?: URL;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        };
        icons: {
            icon: string;
            shortcut: string;
        };
    };
    static website(meta: Website): {
        title: string;
        description: string;
        metadataBase: URL;
        openGraph: {
            type: "website" | "Article" | "book";
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            section: string;
            publishedTime: string;
            modifiedTime: string;
            audio?: URL;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        };
        icons: {
            icon: string;
            shortcut: string;
        };
    };
    static book(meta: Book): {
        title: string;
        description: string;
        metadataBase: URL;
        openGraph: {
            type: "website" | "Article" | "book";
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            isbn: string;
            releaseDate: string;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        } | {
            type: "website" | "Article" | "book";
            section: string;
            publishedTime: string;
            modifiedTime: string;
            audio?: URL;
            tags: [string, ...string[]];
            authors: [string, ...string[]];
            title: string;
            description: string;
            url: URL;
            siteName: string;
            locale: "en-US" | string;
            images: [Images, ...Images[]];
        };
        icons: {
            icon: string;
            shortcut: string;
        };
    };
}
