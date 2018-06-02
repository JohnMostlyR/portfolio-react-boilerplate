/**
 * ValidateForm
 * @param {Object} field - An object with all required fields and their current values.
 * @param {Object} fieldError - An object with an entry for every field with as value the error
 * description.
 * @returns {boolean} - "false" for no input error(s), "true" for input errors.
 */

export default function validateForm({ field, fieldError }) {
  const EMPTY_VALUES = Object
    .keys(field)
    .some((key) => (
      typeof field[key] === 'undefined'
      || field[key] === null
      || field[key].length === 0
    ));

  if (EMPTY_VALUES) {
    return true;
  }

  const ERROR_MESSAGES = Object
    .keys(fieldError)
    .filter((key) => key !== 'network')
    .some((key) => fieldError[key]);

  if (ERROR_MESSAGES) {
    return true;
  }

  return false;
}
