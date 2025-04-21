import { z as t } from "zod";
import { num as s } from "./num.mjs";
const g = t.object({
  alt: t.string(),
  height: t.number().optional(),
  url: t.string(),
  width: t.number().optional()
}), o = t.object({
  description: t.string(),
  images: t.tuple([g]).rest(g),
  locale: t.string().default("en-US"),
  siteName: t.string(),
  title: t.string(),
  url: t.string()
}), l = t.object({
  authors: t.tuple([t.string()]).rest(t.string()),
  isbn: t.string(),
  releaseDate: t.string(),
  tags: t.tuple([t.string()]).rest(t.string())
}).merge(o), h = t.object({
  audio: t.string().url().optional(),
  authors: t.tuple([t.string()]).rest(t.string()),
  modifiedTime: t.string(),
  publishedTime: t.string(),
  section: t.string(),
  tags: t.tuple([t.string()]).rest(t.string())
}).merge(o), m = t.object({
  article: h,
  book: l,
  website: o
}), b = (i) => t.object({
  description: t.string(),
  icons: t.object({
    icon: t.string(),
    shortcut: t.string()
  }),
  metadataBase: t.instanceof(URL),
  openGraph: m.shape[i].transform((e) => ({
    ...e,
    images: e.images,
    type: i
  })),
  title: t.string()
});
class f {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
  static generate(e, r) {
    const u = e.images.map((n, c) => {
      const a = { ...n };
      return c === s("0") && n.height !== void 0 && (a.height = s("600")), c === s("0") && n.width !== void 0 && (a.width = s("800")), a;
    });
    return b(r).parse({
      description: e.description,
      icons: {
        icon: "/assets/favicons/favicon.ico",
        shortcut: "/assets/favicons/shortcut-icon.png"
      },
      metadataBase: new URL(e.url),
      openGraph: {
        ...m.shape[r].parse({
          ...e,
          images: u
        }),
        type: r
      },
      title: e.title
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
  static article(e) {
    return this.generate(e, "article");
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
  static website(e) {
    return this.generate(e, "website");
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
  static book(e) {
    return this.generate(e, "book");
  }
}
export {
  f as GenerateMetadata
};
