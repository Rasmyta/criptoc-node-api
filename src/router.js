import criptomonedas from './routes/criptoc'
import auth from './routes/auth'

export default (app) => {
  app.use('/auth', auth)
  app.use('/criptoc', criptomonedas)
}
