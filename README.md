# semantic-release-poc

A simple TypeScript npm package that provides a usable tagged template string called "Foobar".

## Installation

```bash
npm install semantic-release-poc
```

## Usage

The package exports a `Foobar` tagged template string function that wraps interpolated values with `[FOOBAR: ...]` formatting.

### TypeScript/ES6 Modules

```typescript
import { Foobar } from 'semantic-release-poc';

const name = 'World';
const result = Foobar`Hello ${name}!`;
console.log(result); // Output: "Hello [FOOBAR: World]!"

// Multiple interpolations
const greeting = 'Hello';
const target = 'beautiful world';
const message = Foobar`${greeting} ${target}!`;
console.log(message); // Output: "[FOOBAR: Hello] [FOOBAR: beautiful world]!"
```

### CommonJS

```javascript
const { Foobar } = require('semantic-release-poc');

const name = 'World';
const result = Foobar`Hello ${name}!`;
console.log(result); // Output: "Hello [FOOBAR: World]!"
```

## Features

- ✅ Tagged template string functionality
- ✅ TypeScript support with full type definitions
- ✅ CommonJS and ES6 module support
- ✅ Handles multiple interpolations
- ✅ Works with any data types (strings, numbers, objects, etc.)

## API

### `Foobar(strings: TemplateStringsArray, ...values: any[]): string`

A tagged template string function that processes template literals and wraps interpolated values with `[FOOBAR: ...]` formatting.

**Parameters:**
- `strings` - The string parts of the template literal
- `values` - The interpolated values

**Returns:** A formatted string with Foobar styling

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in the `dist/` directory
```