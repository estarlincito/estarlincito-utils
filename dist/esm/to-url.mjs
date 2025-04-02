import { handleError as t } from "./handle-error.mjs";
const o = (r) => {
  try {
    return new URL(r);
  } catch {
    return t(`Invalid URL: ${r}, example: 'https://example.com/'`);
  }
};
export {
  o as toURL
};
