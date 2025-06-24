import { t } from "tyne";
const p = t.object({
  query: t.string(),
  stop: t.boolean()
}), i = t.object({
  data: t.array(t.any()),
  end: t.number(),
  length: t.number(),
  next: p,
  prev: p,
  start: t.number()
}), l = (n, r = []) => {
  const { length: a } = r, u = i.validate({
    data: [],
    end: 0,
    length: 0,
    next: { query: "#", stop: !0 },
    prev: { query: "#", stop: !0 },
    start: 0
  });
  if (!n || isNaN(parseInt(n)))
    return i.validate({
      data: r.slice(0, 6),
      end: Math.min(6, r.length),
      length: a,
      next: { query: "?page=2", stop: r.length < 6 },
      prev: { query: "#", stop: !0 },
      start: 1
    });
  const e = typeof n == "number" ? n : parseInt(n, 10);
  if (e <= 0) return u;
  const s = (e - 1) * 6, o = Math.min(s + 6, a);
  return s >= o ? u : i.validate({
    data: r.slice(s, o),
    end: o,
    length: a,
    next: {
      query: `?page=${e + 1}`,
      stop: o === a
    },
    prev: {
      query: e > 1 ? `?page=${e - 1}` : "#",
      stop: e <= 1
    },
    start: s + 1
  });
};
export {
  l as pagination
};
