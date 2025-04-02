const n = (t, e) => t.sort(
  (a, r) => new Date(r[e]).valueOf() - new Date(a[e]).valueOf()
);
export {
  n as sortByDate
};
