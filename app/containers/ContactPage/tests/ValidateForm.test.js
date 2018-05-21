import validateForm from '../ValidateForm';

/* eslint-disable no-underscore-dangle */
describe('validateForm', () => {
  const field = Object.freeze({
    aString: 'A subject',
    aNumber: 0,
  });
  const fieldError = Object.freeze({});

  it('should return "false" when all fields are filled without any errors', () => {
    expect(validateForm({ field, fieldError })).toBe(false);
  });

  it('should return "false" when fieldError has any entry without an error message', () => {
    const _fieldError = Object.assign({ ...fieldError }, { falseValue: false, emptyValue: '' });
    expect(validateForm({ field, fieldError: _fieldError })).toBe(false);
  });

  it('should return "false" on network errors', () => {
    const _fieldError = Object.assign({ ...fieldError }, {
      network: 'This is a network error' });
    expect(validateForm({ field, fieldError: _fieldError })).toBe(false);
  });

  describe('validate a String field', () => {
    it('should return "true" when a String field is empty', () => {
      const _field = Object.assign({ ...field }, { aString: '' });
      expect(validateForm({ field: _field, fieldError })).toBe(true);
    });

    it('should return "true" when a String field has an entry in "fieldError"', () => {
      const _fieldError = Object.assign({ ...fieldError }, { aString: 'Some error' });
      expect(validateForm({ field, fieldError: _fieldError })).toBe(true);
    });
  });

  describe('validate a Number field', () => {
    it('should return "true" when a Number field is empty', () => {
      const _field = Object.assign({ ...field }, { aNumber: null });
      expect(validateForm({ field: _field, fieldError })).toBe(true);
    });

    it('should return "true" when a Number field has an entry in "fieldError"', () => {
      const _fieldError = Object.assign({ ...fieldError }, { aNumber: 'Some error' });
      expect(validateForm({ field, fieldError: _fieldError })).toBe(true);
    });
  });
});
