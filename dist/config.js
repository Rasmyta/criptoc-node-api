'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SETTINGS = (0, _dotenv.config)();

exports.default = app => {
  app.disable('x-powered-by');

  app.set('env', SETTINGS.parsed.ENV);
  app.set('config', SETTINGS.parsed);
  app.locals.env = app.get('env');
  app.locals.config = app.get('config');

  if (SETTINGS.parsed.ENV !== 'test') {
    app.use((0, _morgan2.default)('combined'));
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  app.use((0, _cors2.default)());
};