declare const utils: {
    apiFetch: ({ url, body, method, }: import("./api-fetch.js").RequestConfig) => Promise<Response>;
    clipMaster: (text: string) => Promise<void>;
    formZed: (name: "first-name" | "last-name" | "company" | "phone-number" | "email" | "password" | "message" | "username") => import("./form-zed.js").Zed | undefined;
    generateMetadata: (meta: import("./metadata.js").WebsiteMeta | import("./metadata.js").BookMeta | import("./metadata.js").ArticleMeta) => {
        title: string;
        description: string;
        metadataBase: URL;
        openGraph: import("./metadata.js").WebsiteMeta | import("./metadata.js").BookMeta | import("./metadata.js").ArticleMeta;
        icons: {
            icon: string;
            shortcut: string;
        };
    };
    handleError: (message: string, code?: string) => never;
    pagination: <T>(page: import("./pagination.js").PageType, data?: T[]) => import("./pagination.js").PaginationResult<T>;
    isDev: (NODE_ENV: string) => NODE_ENV is "development";
    removeKeys: <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K | K[]) => Omit<T, K>;
};
export default utils;
