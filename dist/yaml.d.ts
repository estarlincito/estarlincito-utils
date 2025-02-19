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
export declare class YamlUtils {
    private constructor();
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
    static parsed: (path: string) => unknown;
}
