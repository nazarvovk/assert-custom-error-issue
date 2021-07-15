import assert from 'assert';

class CustomError extends Error {}

try {
  assert.ok(false, new CustomError('This is a custom error'));
} catch (error) {
  console.log(error);
}
