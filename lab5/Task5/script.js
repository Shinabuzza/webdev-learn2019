function check(data, expectedType) {
  if (!data && data !== null) {
    throw new Error('ExpectedData');
  }

  if (!expectedType) {
    throw new Error('ExpectedType');
  }

  if (typeof data === expectedType || (data === null && expectedType === 'null')) {
    return true;
  } else {
    throw new Error('ValidationError');
  }
}

try {
  console.log(check([], 'number')); // false or throw ValidationError
  console.log(check([], 'array')); // false or throw ValidationError
  console.log(check(null, 'null')); // true
  console.log(check('test', 'string')); // true
} catch (error) {
  console.log(error);
}
