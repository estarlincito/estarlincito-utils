import { toURL } from './to-url.js';
/**
 * A utility class for managing constants.
 * The class can be extended with custom data using generics.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
export class Constants {
    /**
     * Prevent direct instantiation of the class.
     * The constructor is private to enforce usage through `create` method.
     */
    constructor() { }
    /**
     * Creates an instance of the Constants class and assigns additional data.
     * It automatically converts the route string to a URL object.
     *
     * @template T - A generic type that extends the `Data` interface.
     * @param data - The data object containing the constant information and any additional data of type `T`.
     * @returns A new instance of the `Constants` class with the provided data and any additional properties from `T`.
     *
     * @example
     * const data = Constants.create({
     *   title: 'My Website',
     *   url: 'https://example.com/home',
     *   description: 'Welcome to my website',
     *   locale: 'en-US',
     *   siteName: 'ExampleSite',
     *   customProperty: 'value'
     * });
     * console.log(data.title); // "My Website"
     * console.log(data.customProperty); // "value"
     *
     * console.log(data);
     *Output:
     *{
     *  title: "My Website",
     *  url: URL {
     *    href: "https://example.com/about",
     *    origin: "https://example.com",
     *    protocol: "https:",
     *    username: "",
     *    password: "",
     *    host: "example.com",
     *    hostname: "example.com",
     *    port: "",
     *    pathname: "/about",
     *    hash: "",
     *    search: ""
     *  },
     *  description: "Welcome to my website",
     *  locale: "en-US",
     *  siteName: "ExampleSite",
     *  customProperty: "value",
     *  path: "/about"
     *}
     */
    static create(data) {
        const urlInstance = toURL(data.url);
        return Object.assign(new Constants(), {
            ...data,
            url: urlInstance,
            path: urlInstance.pathname,
        });
    }
}
// export const Constants = Object.freeze({
//   create: _Constants.create,
// });
