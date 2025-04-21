import { z as n } from "zod";
import { throwAppError as m } from "./error-handling.mjs";
const a = (e) => {
  const t = n.string().refine((r) => /^-?\d*\.?\d+$/.test(r), {
    message: "Format invalid number"
  }).transform((r) => parseFloat(r)).refine((r) => !isNaN(r), { message: "Invalid number" });
  try {
    return t.parse(e);
  } catch {
    throw m("Invalid number");
  }
};
export {
  a as num
};
