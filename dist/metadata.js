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
export const generateMetadata = (meta) => {
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
