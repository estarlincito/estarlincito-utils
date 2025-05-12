import { z as t } from "zod";
const i = t.object({
  query: t.string(),
  stop: t.boolean()
}), c = () => t.object({
  data: t.array(t.any()),
  end: t.number(),
  length: t.number(),
  next: i,
  prev: i,
  start: t.number()
}).transform((e) => ({
  ...e,
  data: e.data
})), y = (e, r = []) => {
  const { length: s } = r, p = c(), u = p.parse({
    data: [],
    end: 0,
    length: 0,
    next: { query: "#", stop: !0 },
    prev: { query: "#", stop: !0 },
    start: 0
  });
  if (!e || isNaN(parseInt(e)))
    return p.parse({
      data: r.slice(0, 6),
      end: Math.min(6, r.length),
      length: s,
      next: { query: "?page=2", stop: r.length < 6 },
      prev: { query: "#", stop: !0 },
      start: 1
    });
  const n = typeof e == "number" ? e : parseInt(e, 10);
  if (n <= 0) return u;
  const a = (n - 1) * 6, o = Math.min(a + 6, s);
  return a >= o ? u : p.parse({
    data: r.slice(a, o),
    end: o,
    length: s,
    next: {
      query: `?page=${n + 1}`,
      stop: o === s
    },
    prev: {
      query: n > 1 ? `?page=${n - 1}` : "#",
      stop: n <= 1
    },
    start: a + 1
  });
};
export {
  y as pagination
};
