'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criptoc = require('./routes/criptoc');

var _criptoc2 = _interopRequireDefault(_criptoc);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/auth', _auth2.default);
  app.use('/criptoc', _criptoc2.default);
};