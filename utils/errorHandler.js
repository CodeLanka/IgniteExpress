const authErrorHandler = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('UnAuthorized!');
  }
};

module.exports = authErrorHandler;
