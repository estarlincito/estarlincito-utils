type Resmsg = {
    success: true;
    message: string;
    code: 200;
} | {
    success: false;
    message: string;
    code: 400 | 401 | 404 | 500;
};
export declare const resmsg: ({ success, message, code }: Resmsg) => Response;
export {};
