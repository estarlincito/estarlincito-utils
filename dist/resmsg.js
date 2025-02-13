const resmsg = ({ success, message, code }) => {
    return new Response(JSON.stringify({ success, message }), { status: code });
};
export default resmsg;
// 400 (Bad Request)
// 404 (Not Found)
// 401 (Unauthorized)
// 200 (OK)
