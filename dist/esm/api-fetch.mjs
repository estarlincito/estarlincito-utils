const s = async (o, e = {}) => {
  const t = o instanceof URL ? o.toString() : o, d = e.method?.toUpperCase() ?? "GET", n = {
    ...e,
    body: d !== "GET" && d !== "DELETE" && e.body ? new URLSearchParams(e.body) : void 0,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      ...e.headers ?? {}
    },
    method: d
  };
  return fetch(t, n);
};
export {
  s as apiFetch
};
