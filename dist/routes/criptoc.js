'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _criptomoneda = require('../models/criptomoneda');

var _criptomoneda2 = _interopRequireDefault(_criptomoneda);

var _utils = require('../models/utils');

var _utils2 = _interopRequireDefault(_utils);

var _middlewares = require('../middlewares');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodyParser = require('body-parser');
const router = _express2.default.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/*
=========================
Routes
=========================
*/

// Devuelve las 50 primeras criptomonedas
router.get('/', async (req, res, next) => {
  let data = await _criptomoneda2.default.find().limit(50);
  res.status(200).json(data);
});

// Muestra las primeras 10 criptomonedas ordenadas por mayor precio en euros
router.get('/topvalue', async (req, res, next) => {
  let data = await _criptomoneda2.default.find().limit(10).sort([['price', -1]]);
  res.status(200).json(data);
});

// Muestra la criptomoneda con el id dado
router.get('/id/:id', async (req, res, next) => {
  let data = await _criptomoneda2.default.findOne({ id: req.params.id });
  res.status(200).json(data);
});

// Modifica una criptomoneda con el id dado. Se añadirá en el Body en formato raw un JSON con todos los campos de la criptomoneda.
router.put('/id/:id', async (req, res, next) => {
  console.log('Body recibido', req.body);

  let data = await _criptomoneda2.default.updateOne({ id: req.params.id }, {
    $set: {
      name: req.body.name,
      symbol: req.body.symbol,
      circulating_supply: req.body.circulating_supply,
      description: req.body.description,
      price: req.body.price,
      percent_change_24h: req.body.percent_change_24h
    }
  });

  res.status(201).json({ documents_updated: data.nModified });
});

// Sube en 0.1 el valor de una criptomoneda
router.put('/up/id/:id', async (req, res, next) => {
  let data = await _criptomoneda2.default.updateOne({ id: req.params.id }, {
    $inc: { price: 0.1 }
  });

  res.status(201).json({ documents_updated: data.nModified });
});

// Baja en 0.1 el valor de una criptomoneda
router.put('/down/id/:id', async (req, res, next) => {
  let data = await _criptomoneda2.default.updateOne({ id: req.params.id }, {
    $inc: { price: -0.1 }
  });

  res.status(201).json({ documents_updated: data.nModified });
});

// Añade una nueva criptomoneda a la BD.
router.post('/', async (req, res, next) => {
  console.log('Body recibido', req.body);

  const newCriptoc = new _criptomoneda2.default({
    id: await (0, _utils2.default)(),
    name: req.body.name,
    symbol: req.body.symbol,
    circulating_supply: req.body.circulating_supply,
    description: req.body.description,
    price: req.body.price,
    percent_change_24h: req.body.percent_change_24h
  });

  await newCriptoc.save();
  res.status(201).json(newCriptoc);
});

// Borra la criptomoneda con ese id
router.delete('/id/:id', _middlewares.auth, async (req, res, next) => {
  let data = await _criptomoneda2.default.deleteOne({ id: req.params.id });

  res.status(200).json({ documents_deleted: data.deletedCount });
});

exports.default = router;