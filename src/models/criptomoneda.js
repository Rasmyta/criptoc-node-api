const mongoose = require('mongoose')

const criptoSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, trim: true, required: true },
    symbol: { type: String, trim: true, required: true },
    circulating_supply: { type: Number, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    percent_change_24h: { type: Number },
  },
  {
    strict: false,
    versionKey: false,
  }
)

const Criptomoneda = mongoose.model('criptomonedas', criptoSchema)

export default Criptomoneda
