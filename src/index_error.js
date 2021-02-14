import express from 'express'
import mongoose from 'mongoose'
import router from './router'
import config from './config'

let _server

const server = {
  start() {
    mongoose
      .connect(
        // 'mongodb+srv://rasma:rasma@entorno-servidor.ekmvw.mongodb.net/criptomonedasAPI?retryWrites=true&w=majority',
        'mongodb://localhost:27017/criptomonedasAPI',
        { useNewUrlParser: true }
      )
      .then(() => {
        const app = express()
        config(app)
        router(app)

        _server = app.listen(app.locals.config.PORT, () => {
          if (app.locals.env !== 'test') {
            console.log('Servidor arrancado en http://localhost:9000')
          }
        })
      })
  },
  close() {
    _server.close()
  },
}

export default server

if (!module.parent) {
  server.start()
}
