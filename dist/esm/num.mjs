import { t as n } from "tyne";
import { throwAppError as a } from "./error-handling.mjs";
const i = (t) => {
  const e = n.string().refine((r) => /^-?\d*\.?\d+$/.test(r), {
    message: "Format invalid number"
  }).transform((r) => parseFloat(r)).refine((r) => !isNaN(r), { message: "Invalid number" });
  try {
    return e.validate(t);
  } catch {
    throw a("Invalid number");
  }
};
export {
  i as num
};
