const u = (e, n = []) => {
  const r = n.length, p = {
    data: [],
    end: 0,
    length: 0,
    next: { query: "#", stop: !0 },
    prev: { query: "#", stop: !0 },
    start: 0
  };
  if (!e || isNaN(parseInt(e)))
    return {
      data: n.slice(0, 6),
      end: Math.min(6, n.length),
      length: r,
      next: { query: "?page=2", stop: n.length < 6 },
      prev: { query: "#", stop: !0 },
      start: 1
    };
  const t = typeof e == "number" ? e : parseInt(e, 10);
  if (t <= 0) return p;
  const s = (t - 1) * 6, o = Math.min(s + 6, r);
  return s >= o ? p : {
    data: n.slice(s, o),
    end: o,
    length: r,
    next: {
      query: `?page=${t + 1}`,
      stop: o === r
    },
    prev: {
      query: t > 1 ? `?page=${t - 1}` : "#",
      stop: t <= 1
    },
    start: s + 1
  };
};
export {
  u as pagination
};
