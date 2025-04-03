type Name = 'first-name' | 'last-name' | 'company' | 'phone-number' | 'email' | 'password' | 'message' | 'username';
type Type = 'number' | 'email' | 'password' | 'text' | 'tel' | 'hidden' | 'search' | 'time' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | undefined;
type Zed = {
    placeholder: string;
    type: Type;
    maxLength: number;
    minLength: number;
    title: string;
};
export interface FormZedTypes {
    Name: Name;
    Type: Type;
    Zed: Zed;
}
/**
 * Retrieves the configuration for a specific form field based on the field's name.
 * The field name must match one of the predefined names (e.g., 'first-name', 'last-name', etc.).
 *
 * @param {Name} name - The name of the form field.
 * @returns {Zed | undefined} The field configuration object or `undefined` if the field is not found.
 *
 * @throws Will log an error if the field is not found in the configuration.
 *
 * @example
 * const fieldConfig = formZed('email');
 * console.log(fieldConfig);
 * // Returns: { placeholder: 'name@domain.com', type: 'email', maxLength: 30, minLength: 5, title: 'Email' }
 */
export declare const formZed: (name: Name) => Zed | undefined;
export {};
