/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { handleError } from './handle-error.js';

type Name =
  | 'first-name'
  | 'last-name'
  | 'company'
  | 'phone-number'
  | 'email'
  | 'password'
  | 'message'
  | 'username';

type Type =
  | 'number'
  | 'email'
  | 'password'
  | 'text'
  | 'tel'
  | 'hidden'
  | 'search'
  | 'time'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | undefined;

type Zed = {
  placeholder: string;
  type: Type;
  maxLength: number;
  minLength: number;
  title: string;
};

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
const fields: Record<Name, Zed> = {
  company: {
    maxLength: 30,
    minLength: 2,
    placeholder: "Estarlincito Support's",
    title: '',
    type: 'text',
  },

  email: {
    maxLength: 30,
    minLength: 5,
    placeholder: 'name@domain.com',
    title: '',
    type: 'email',
  },

  'first-name': {
    maxLength: 30,
    minLength: 1,
    placeholder: 'Estarlin',
    title: '',
    type: 'text',
  },

  'last-name': {
    maxLength: 30,
    minLength: 1,
    placeholder: 'R',
    title: '',
    type: 'text',
  },

  message: {
    maxLength: 1000,
    minLength: 1,
    placeholder: 'Enter your message here…',
    title: '',
    type: 'text',
  },

  password: {
    maxLength: 30,
    minLength: 8,
    placeholder: '4ppl3-1Ph0ne',
    title: '',
    type: 'password',
  },

  'phone-number': {
    maxLength: 12,
    minLength: 10,
    placeholder: '123-456-7890',
    title: '',
    type: 'tel',
  },

  username: {
    maxLength: 20,
    minLength: 5,
    placeholder: 'estarlincito',
    title: '',
    type: 'text',
  },
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
export const formZed = (name: Name): Zed | undefined => {
  const indexOne: string = name[0] as string;
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
