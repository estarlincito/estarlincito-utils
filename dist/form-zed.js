import { handleError } from './handle-error.js';
/**
 * Represents the field names for the form.
 * @typedef {('first-name' | 'last-name' | 'company' | 'phone-number' | 'email' | 'password' | 'message' | 'username')} Name
 */
/**
 * Represents the type of the field.
 * @typedef {('number' | 'email' | 'password' | 'text' | 'tel' | 'hidden' | 'search' | 'time' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | undefined)} Type
 */
/**
 * Defines the structure of each form field's attributes.
 * @interface Zed
 * @property {string} placeholder - The placeholder text for the input field.
 * @property {Type} type - The input field type (e.g., text, email, password, etc.).
 * @property {number} maxLength - The maximum length allowed for the input value.
 * @property {number} minLength - The minimum length required for the input value.
 * @property {string} title - The title of the field with the first letter capitalized and formatted.
 */
/**
 * The configuration object that contains the details for each field.
 * @type {Record<Name, Zed>}
 */
const fields = {
    'first-name': {
        placeholder: 'Estarlin',
        type: 'text',
        maxLength: 30,
        minLength: 1,
        title: '',
    },
    'last-name': {
        placeholder: 'R',
        type: 'text',
        maxLength: 30,
        minLength: 1,
        title: '',
    },
    company: {
        placeholder: "Estarlincito Support's",
        type: 'text',
        maxLength: 30,
        minLength: 2,
        title: '',
    },
    'phone-number': {
        placeholder: '123-456-7890',
        type: 'tel',
        maxLength: 12,
        minLength: 10,
        title: '',
    },
    email: {
        placeholder: 'name@domain.com',
        type: 'email',
        maxLength: 30,
        minLength: 5,
        title: '',
    },
    password: {
        placeholder: '4ppl3-1Ph0ne',
        type: 'password',
        maxLength: 30,
        minLength: 8,
        title: '',
    },
    message: {
        placeholder: 'Enter your message here…',
        type: 'text',
        maxLength: 1000,
        minLength: 1,
        title: '',
    },
    username: {
        placeholder: 'estarlincito',
        type: 'text',
        maxLength: 20,
        minLength: 5,
        title: '',
    },
};
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
export const formZed = (name) => {
    const indexOne = name[0];
    const title = name
        .replace(indexOne, indexOne.toLocaleUpperCase())
        .replace('-', ' ');
    const field = fields[name];
    if (!field) {
        handleError(`${name} was not found in (fields) /lib/zed.ts`);
        return undefined;
    }
    return { ...field, title };
};
