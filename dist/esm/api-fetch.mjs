import { handleError as i } from "./handle-error.mjs";
const s = (t) => {
  try {
    const n = JSON.parse(t);
    return new URLSearchParams(n).toString();
  } catch {
    i("Invalid JSON string in body");
    return;
  }
}, p = async ({
  url: t,
  body: n,
  headers: r,
  method: e
}) => {
  const o = t instanceof URL ? t.toString() : t, c = {
    body: n ? s(n) : void 0,
    headers: r ?? {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Estarlincito (https://www.estarlincito.com)"
    },
    method: e
  };
  return await fetch(o, c);
};
export {
  p as apiFetch
};
