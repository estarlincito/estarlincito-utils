const n = (t, e) => t.sort(
  (a, o) => new Date(o[e]).valueOf() - new Date(a[e]).valueOf()
);
export {
  n as sortByDate
};
