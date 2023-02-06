const { BadRequest } = require("../errors");
// KEEPS THE ERROR MESSAGES IN AN ARRAY AND THROWS A NEW ERROR
const badrequestError = (error) => {
  if (error.name === "ValidationError") {
    let errors = [];
    Object.keys(error.errors).forEach((key) =>
      errors.push(error.errors[key].message)
    );
    console.log(errors);
    throw new BadRequest(errors);
  }
};

module.exports = badrequestError;
