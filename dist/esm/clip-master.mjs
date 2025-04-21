import { throwAppError as t } from "./error-handling.mjs";
const a = async (r) => {
  try {
    await navigator.clipboard.writeText(r);
  } catch {
    t("Failed to copy to clipboard");
  }
};
export {
  a as clipMaster
};
