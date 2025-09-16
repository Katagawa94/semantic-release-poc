"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foobar = Foobar;
/**
 * Foobar tagged template string function
 * Processes template literals with special formatting
 *
 * @param strings - The string parts of the template literal
 * @param values - The interpolated values
 * @returns A formatted string with Foobar styling
 */
function Foobar(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            // Wrap interpolated values with [FOOBAR: ... ]
            result += `[FOOBAR: ${values[i]}]`;
        }
    }
    return result;
}
exports.default = Foobar;
//# sourceMappingURL=foobar.js.map