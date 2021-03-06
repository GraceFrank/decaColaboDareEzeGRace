
const powerOfTwo = require('./powerOfTwo');

test('0 is not a power of 2', () => {
  expect(powerOfTwo(0)).toBe(false);
});

test('a string should give NaN', () => {
  expect(powerOfTwo('136')).toBe(NaN);
});

test('12 is not a power of 2', () => {
  expect(powerOfTwo(12)).toBe(false);
});

test('empty parameter should give NaN', () => {
  expect(powerOfTwo()).toBe(NaN);
});

test('72057594037927940 is a power of 2', () => {
  expect(powerOfTwo(72057594037927940)).toBe(true);
});

test('2 is a power of 2', () => {
  expect(powerOfTwo(2)).toBe(true);
});

test('0.125 is a power of 2', () => {
  expect(powerOfTwo(0.125)).toBe(true);
});

test('1 is a power of 2', () => {
  expect(powerOfTwo(1)).toBe(true);
});

test('0.03125 is a power of 2', () => {
  expect(powerOfTwo(0.03125)).toBe(true);
});

test('1.4142135623730951 is a power of 2', () => {
  expect(powerOfTwo(1.4142135623730951)).toBe(true);
});

