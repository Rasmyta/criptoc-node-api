'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const auth = exports.auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Not authorized' });
  }

  const token = req.headers.authorization.split(' ')[1];
  const payload = _jwtSimple2.default.decode(token, req.app.locals.config.TOKEN);

  req.user = payload.email;

  next();
};