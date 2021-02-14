import criptomonedas from './routes/criptoc'

export default (app) => {
  app.use('/criptoc', criptomonedas)
}
