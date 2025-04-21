class e extends Error {
  constructor(r, c) {
    super(r), this.code = c, this.name = "AppError", Error.captureStackTrace && Error.captureStackTrace(this, e);
  }
}
const t = (o, r) => {
  throw new e(o, r);
};
function s(o = "Unexpected error", r) {
  r instanceof Error ? (console.error(`❌ ${o}:`, r.message), console.error(r.stack)) : console.error(`❌ ${o}:`, r);
}
export {
  s as logError,
  t as throwAppError
};
