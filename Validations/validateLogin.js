const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email*";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password*";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}