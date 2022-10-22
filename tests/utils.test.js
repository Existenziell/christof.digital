const fibonacci = require('../util/fibonacci')

test('Returns the fibonacci sequence to desired {depth}', () => {
  expect(fibonacci(10)).toBe('0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55');
});
