import { z as t } from "zod";
const c = t.object({
  alt: t.string(),
  height: t.number().optional(),
  url: t.string(),
  width: t.number().optional()
}), a = t.object({
  description: t.string(),
  images: t.tuple([c]).rest(c),
  locale: t.string().default("en-US"),
  siteName: t.string(),
  title: t.string(),
  url: t.string()
}), m = t.object({
  authors: t.tuple([t.string()]).rest(t.string()),
  isbn: t.string(),
  releaseDate: t.string(),
  tags: t.tuple([t.string()]).rest(t.string())
}).merge(a), u = t.object({
  audio: t.string().url().optional(),
  authors: t.tuple([t.string()]).rest(t.string()),
  modifiedTime: t.string(),
  publishedTime: t.string(),
  section: t.string(),
  tags: t.tuple([t.string()]).rest(t.string())
}).merge(a), g = t.object({
  article: u,
  book: m,
  website: a
}), h = (s) => t.object({
  description: t.string(),
  icons: t.object({
    icon: t.string(),
    shortcut: t.string()
  }),
  metadataBase: t.instanceof(URL),
  openGraph: g.shape[s].transform((e) => ({
    ...e,
    images: e.images,
    type: s
  })),
  title: t.string()
});
class d {
  static generate(e, i) {
    const l = e.images.map((r, o) => {
      const n = { ...r };
      return o === 0 && r.height !== void 0 && (n.height = 600), o === 0 && r.width !== void 0 && (n.width = 800), n;
    });
    return h(i).parse({
      description: e.description,
      icons: {
        icon: "/assets/favicons/favicon.ico",
        shortcut: "/assets/favicons/shortcut-icon.png"
      },
      metadataBase: new URL(e.url),
      openGraph: {
        ...g.shape[i].parse({
          ...e,
          images: l
        }),
        type: i
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
  d as GenerateMetadata
};
