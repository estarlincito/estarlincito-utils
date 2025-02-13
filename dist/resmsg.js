export const resmsg = ({ success, message, code }) => {
    return new Response(JSON.stringify({ success, message }), { status: code });
};
// 400 (Bad Request)
// 404 (Not Found)
// 401 (Unauthorized)
// 200 (OK)
