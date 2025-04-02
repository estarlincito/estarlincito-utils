import { handleError as t } from "./handle-error.mjs";
const o = async (r) => {
  try {
    await navigator.clipboard.writeText(r);
  } catch {
    t("Failed to copy to clipboard");
  }
};
export {
  o as clipMaster
};
