

/**
 * A tagged template literal function.
 * This is the actual implementation that will be exported.
 * Its purpose is to simply "tag" the template literal and reconstruct the original string.
 * @param strings - The static string parts of the template.
 * @param values - The interpolated values.
 * @returns The reconstructed, original string.
 */
function fooProcessor(strings: TemplateStringsArray, ...values: any[]): string {
    let result = "";
    for (let i = 0; i < values.length; i++) {
        result += strings[i];
        result += values[i];
    }
    result += strings[strings.length - 1];
    
    return result;
}

export const Foo = fooProcessor;
