const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;

//^^^using express error handler and using it as custom error handler^^^
