const { CustomError } = require("../errors");
const {StatusCodes} = require('http-status-codes');
const errorHandle = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'server_error' });
};

module.exports = errorHandle;
