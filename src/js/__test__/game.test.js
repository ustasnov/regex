import Validator from '../game';

test('Only Latin letters, dashes -, underscores _ and numbers (0-9) should be allowed', () => {
  const validator = new Validator('ghj_134Rt-90h');
  expect(validator.validateUsername()).toBe(true);
});

test('Characters other than Latin letters, dashes -, underscores _ and numbers (0-9) must not be allowed;', () => {
  const validator = new Validator('gh_#1@34&Rt-90h');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not start with numbers', () => {
  const validator = new Validator('1ghj_134Rt-90h');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not start with underscores', () => {
  const validator = new Validator('_ghj_134Rt-90h');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not start with dashes', () => {
  const validator = new Validator('-ghj_134Rt-90h');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not end with numbers', () => {
  const validator = new Validator('ghj_134Rt-90');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not end with underscores', () => {
  const validator = new Validator('ghj_134Rt-90g_');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not end with dashes', () => {
  const validator = new Validator('ghj_134Rt-90h-');
  expect(validator.validateUsername()).toBe(false);
});

test('The name must not contain more than three digits in a row', () => {
  const validator = new Validator('ghj_134Rt-9078h');
  expect(validator.validateUsername()).toBe(false);
});
