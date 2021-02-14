'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _criptomoneda = require('../models/criptomoneda');

var _criptomoneda2 = _interopRequireDefault(_criptomoneda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Encuentra el max ID de la colección y lo incrementa en uno.
const getNewId = async () => {
  const document = await _criptomoneda2.default.findOne({}).sort([['id', -1]]);
  return document.id ? document.id + 1 : 1;
};

exports.default = getNewId;