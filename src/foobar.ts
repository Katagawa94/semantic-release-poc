/**
 * Foobar tagged template string function
 * Processes template literals with special formatting
 * 
 * @param strings - The string parts of the template literal
 * @param values - The interpolated values
 * @returns A formatted string with Foobar styling
 */
export function Foobar(strings: TemplateStringsArray, ...values: any[]): string {
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

export default Foobar;