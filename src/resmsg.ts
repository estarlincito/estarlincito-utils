type Resmsg =
  | { success: true; message: string; code: 200 }
  | { success: false; message: string; code: 400 | 401 | 404 | 500 };

export const resmsg = ({ success, message, code }: Resmsg) => {
  return new Response(JSON.stringify({ success, message }), { status: code });
};

// 400 (Bad Request)
// 404 (Not Found)
// 401 (Unauthorized)
// 200 (OK)
