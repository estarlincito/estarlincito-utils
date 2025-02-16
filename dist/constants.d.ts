/**
 * Interface that represents the required metadata for a website or app.
 */
export interface Data {
    /** The title of the content
     * @example
     * 'My Website'
     */
    title: string;
    /** The route or URL of the content
     * @example
     * 'https://example.com/about'
     */
    url: string;
    /** A description of the content
     * @example
     * 'Welcome to my website'
     */
    description: string;
    /** The locale of the content
     *  @example
     * 'en-US'
     */
    locale: string;
    /** The site name
     *  @example
     * 'ExampleSite'
     */
    siteName: string;
    /** The site contents
     *  @example
     * ['Look at my blog!', 'I am a person who finds passion in psychology...']
     */
    contents?: [string, ...string[]];
}
export type ConstantsReturn<T extends object> = T & {
    path: string;
    url: URL;
};
/**
 * A utility class for managing constants.
 * The class can be extended with custom data using generics.
 */
export declare class Constants<T extends object> {
    /**
     * Prevent direct instantiation of the class.
     * The constructor is private to enforce usage through `create` method.
     */
    private constructor();
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
    static create<T extends object>(data: Data & T): ConstantsReturn<T>;
}
