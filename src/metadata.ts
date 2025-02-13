/**
 * Represents the base metadata structure for various types of content.
 *
 * @interface BaseMeta
 * @property {string} title - The title of the content.
 * @property {string} description - A brief description of the content.
 * @property {URL} url - The URL of the content.
 * @property {string} siteName - The name of the site hosting the content.
 * @property {string} locale - The locale of the content, e.g., 'en-US'.
 * @property {Array<{url: string, alt: string, width: number, height: number}>} images - An array of image objects associated with the content.
 *
 * @example
 * const baseMeta = {
 *   title: 'Example Title',
 *   description: 'An example description.',
 *   url: new URL('https://example.com/ebooks'),
 *   siteName: 'Example Site',
 *   locale: 'en-US',
 *   images: [
 *     {
 *       url: 'https://example.com/image1.jpg',
 *       alt: 'An example image',
 *       width: 800,
 *       height: 600,
 *     },
 *   ],
 * };
 */
export interface BaseMeta {
  title: string;
  description: string;
  url: URL;
  siteName: string;
  locale: 'en-US' | string;
  images: {
    url: string;
    alt: string;
    width: number | 800;
    height: number | 600;
  }[];
}
/**
 * Represents metadata specific to websites.
 *
 * @interface WebsiteMeta
 * @extends BaseMeta
 * @property {'website'} type - The type of content, set to 'website'.
 *
 * @example
 * const websiteMeta = {
 *   ...baseMeta,
 *   type: 'website',
 * };
 */
export interface WebsiteMeta extends BaseMeta {
  type: 'website';
}
/**
 * Represents metadata specific to books.
 *
 * @interface BookMeta
 * @extends BaseMeta
 * @property {'book'} type - The type of content, set to 'book'.
 * @property {string} isbn - The ISBN of the book.
 * @property {string[]} authors - An array of authors of the book.
 * @property {string} releaseDate - The release date of the book.
 * @property {string[]} tags - An array of tags associated with the book.
 *
 * @example
 * const bookMeta = {
 *   ...baseMeta,
 *   type: 'book',
 *   isbn: '978-3-16-148410-0',
 *   authors: ['Author One', 'Author Two'],
 *   releaseDate: '2025-02-12',
 *   tags: ['Fiction', 'Adventure'],
 * };
 */
export interface BookMeta extends BaseMeta {
  type: 'book';
  isbn: string;
  authors: string[];
  releaseDate: string;
  tags: string[];
}
/**
 * Represents metadata specific to articles.
 *
 * @interface ArticleMeta
 * @extends BaseMeta
 * @property {'article'} type - The type of content, set to 'article'.
 * @property {string[]} tags - An array of tags associated with the article.
 * @property {string} section - The section of the publication where the article appears.
 * @property {string} publishedTime - The publication time of the article.
 * @property {string} modifiedTime - The last modified time of the article.
 * @property {string[]} authors - An array of authors of the article.
 * @property {URL} audio - The URL to an audio file associated with the article.
 *
 * @example
 * const articleMeta = {
 *   ...baseMeta,
 *   type: 'article',
 *   tags: ['Technology', 'AI'],
 *   section: 'Tech News',
 *   publishedTime: '2025-02-12T15:09:16Z',
 *   modifiedTime: '2025-02-12T16:00:00Z',
 *   authors: ['Author One'],
 *   audio: new URL('https://example.com/audio.mp3'),
 * };
 */
export interface ArticleMeta extends BaseMeta {
  type: 'article';
  tags: string[];
  section: string;
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
  audio: URL;
}

type Meta = WebsiteMeta | BookMeta | ArticleMeta;
/**
 * Generates metadata for the given content.
 *
 * @param {Meta} meta - The metadata object.
 * @returns {object} The generated metadata.
 *
 * @example
 * const metadata = generateMetadata(articleMeta);
 * console.log(metadata);
 *
 * ⚠️ IMPORTANT: Ensure that the following files exist in your project:
 *    - `public/assets/favicons/favicon.ico`
 *    - `public/assets/favicons/shortcut-icon.png`
 */
export const generateMetadata = (meta: Meta) => {
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.url.origin),
    openGraph: meta,
    icons: {
      icon: '/assets/favicons/favicon.ico',
      shortcut: '/assets/favicons/shortcut-icon.png',
    },
  };
};

generateMetadata({
  type: 'book',
  locale: 'en-US',
  siteName: 'MyEbook',
  authors: ['doc.authors'],
  isbn: 'doc.isbn',
  releaseDate: 'doc.released',
  tags: ['doc.tags'],
  description: 'doc.summary',
  title: 'doc.title',
  images: [{ width: 800, height: 600, url: 'doc.cover', alt: 'doc.coverAl' }],
  url: new URL(`https://myebook.estarlincito.com/ebooks/`),
});
