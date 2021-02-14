'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criptoc = require('./routes/criptoc');

var _criptoc2 = _interopRequireDefault(_criptoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/criptoc', _criptoc2.default);
};