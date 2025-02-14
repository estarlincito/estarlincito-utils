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
export class GenerateMetadata {
    static generate(meta, type) {
        return {
            title: meta.title,
            description: meta.description,
            metadataBase: meta.url,
            openGraph: { ...meta, type },
            icons: {
                icon: '/assets/favicons/favicon.ico',
                shortcut: '/assets/favicons/shortcut-icon.png',
            },
        };
    }
    static article(meta) {
        return this.generate(meta, 'Article');
    }
    static website(meta) {
        return this.generate(meta, 'website');
    }
    static book(meta) {
        return this.generate(meta, 'book');
    }
}
//x and google support and more
