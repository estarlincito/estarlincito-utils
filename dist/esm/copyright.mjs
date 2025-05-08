import { throwAppError as e } from "./error-handling.mjs";
const c = (t) => {
  const r = (/* @__PURE__ */ new Date()).getFullYear();
  return t > r && e(
    `buildYear (${t}) cannot be greater than the current year (${r}).`
  ), t === r ? `Copyright © ${t}` : `Copyright © ${t}–${r}`;
};
export {
  c as copyright
};
