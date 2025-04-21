import { throwAppError as i } from "./error-handling.mjs";
const s = (t) => {
  try {
    const r = JSON.parse(t);
    return new URLSearchParams(r).toString();
  } catch {
    i("Invalid JSON string in body");
    return;
  }
}, d = async ({
  url: t,
  body: r,
  headers: n,
  method: e
}) => {
  const o = t instanceof URL ? t.toString() : t, c = {
    body: r ? s(r) : void 0,
    headers: n ?? {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Estarlincito (https://www.estarlincito.com)"
    },
    method: e
  };
  return await fetch(o, c);
};
export {
  d as apiFetch
};
