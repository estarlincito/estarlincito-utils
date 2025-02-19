import path_ from 'path';
import { parse } from 'yaml';
import fs from 'fs';
import { handleError } from './handle-error.js';
/**
 * Utility class for working with YAML files.
 *
 * This class provides methods for reading and parsing YAML files.
 * It supports both relative and absolute file paths, and ensures that any errors
 * related to file reading or YAML parsing are properly handled.
 *
 * @example
 * // Usage example
 * const data = YamlUtils.parsed('/path/to/file.yaml');
 * console.log(data); // Parsed YAML content
 */
export class YamlUtils {
    constructor() { }
    /**
     * Parses a YAML file and returns the parsed data.
     *
     * @param {string} path - The relative or absolute path to the YAML file.
     * @returns {unknown} The parsed YAML data.
     * @throws {Error} Throws an error if the file cannot be read or the YAML is invalid.
     *
     * @example
     * const data = parsedYAML('/path/to/file.yaml');
     * console.log(data); // Parsed YAML content
     */
    // eslint-disable-next-line consistent-return
    static parsed = (path) => {
        try {
            // Resolves the provided path to an absolute path
            const filePath = path_.resolve(path);
            // Reads the content of the YAML file as a string
            const fileContent = fs.readFileSync(filePath, 'utf8');
            // Parses the YAML content into a JavaScript object
            const parsedData = parse(fileContent);
            return parsedData;
        }
        catch (error) {
            // If any error occurs, log and throw it
            handleError(`Failed to parse YAML file at ${path}: ${error instanceof Error ? error.message : error}`);
        }
    };
}
