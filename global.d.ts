import { Foo } from './src/index';

declare global {
  /**
   * A globally available tagged template literal.
   * Example: const myString = Foo`Hello ${'World'}!`;
   */
  const Foo: typeof import('./src/index').Foo;
}
