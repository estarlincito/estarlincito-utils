const n = (t) => {
  const e = new Date(t), o = {
    day: "2-digit",
    month: "short",
    year: "numeric"
  };
  return e.toLocaleDateString("en-US", o);
};
export {
  n as dateFormat
};
