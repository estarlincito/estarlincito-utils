import { z as t } from "zod";
import { handleError as a } from "./handle-error.mjs";
const o = (e) => {
  const n = t.string().refine((r) => /^-?\d*\.?\d+$/.test(r), {
    message: "Format invalid number"
  }).transform((r) => parseFloat(r)).refine((r) => !isNaN(r), { message: "Invalid number" });
  try {
    return n.parse(e);
  } catch {
    throw a("Invalid number");
  }
};
export {
  o as num
};
