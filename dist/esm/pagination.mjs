import { z as e } from "zod";
import { num as t } from "./num.mjs";
const c = e.object({
  query: e.string(),
  stop: e.boolean()
}), m = () => e.object({
  data: e.array(e.any()),
  end: e.number(),
  length: e.number(),
  next: c,
  prev: c,
  start: e.number()
}).transform((r) => ({
  ...r,
  data: r.data
})), h = (r, s = []) => {
  const { length: a } = s, u = m(), i = u.parse({
    data: [],
    end: t("0"),
    length: t("0"),
    next: { query: "#", stop: !0 },
    prev: { query: "#", stop: !0 },
    start: t("0")
  });
  if (!r || isNaN(parseInt(r)))
    return u.parse({
      data: s.slice(t("0"), t("6")),
      end: Math.min(t("6"), s.length),
      length: a,
      next: { query: "?page=2", stop: s.length < t("6") },
      prev: { query: "#", stop: !0 },
      start: t("1")
    });
  const n = typeof r == "number" ? r : parseInt(r, t("10"));
  if (n <= t("0")) return i;
  const o = (n - t("1")) * t("6"), p = Math.min(o + t("6"), a);
  return o >= p ? i : u.parse({
    data: s.slice(o, p),
    end: p,
    length: a,
    next: {
      query: `?page=${n + t("1")}`,
      stop: p === a
    },
    prev: {
      query: n > t("1") ? `?page=${n - t("1")}` : "#",
      stop: n <= t("1")
    },
    start: o + t("1")
  });
};
export {
  h as pagination
};
