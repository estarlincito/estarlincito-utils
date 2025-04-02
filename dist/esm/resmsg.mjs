const n = ({ success: s, message: e, code: t }) => new Response(JSON.stringify({ message: e, success: s }), { status: t });
export {
  n as resmsg
};
