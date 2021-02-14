'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _server;

const server = {
  start() {
    _mongoose2.default.connect('mongodb+srv://rasma:rasma@entorno-servidor.ekmvw.mongodb.net/criptomonedasAPI?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
      const app = (0, _express2.default)();
      (0, _config2.default)(app);
      (0, _router2.default)(app);

      _server = app.listen('9000', () => {
        if (process.env.NODE_ENV !== 'test') {
          console.log('Servidor arrancado en el puerto 9000');
        }
      });
    });
  },
  close() {
    _server.close();
  }
};

exports.default = server;


if (!module.parent) {
  server.start();
}