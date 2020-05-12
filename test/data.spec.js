import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


