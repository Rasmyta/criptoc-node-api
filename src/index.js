import express from 'express'
import config from './config'
import router from './router'
import mongoose from 'mongoose'

let _server

const server = {
  start() {
    mongoose
      .connect(
        'mongodb+srv://rasma:rasma@entorno-servidor.ekmvw.mongodb.net/criptomonedasAPI?retryWrites=true&w=majority',
        { useNewUrlParser: true }
      )
      .then(() => {
        const app = express()
        config(app)
        router(app)

        _server = app.listen('9000', () => {
          if (process.env.NODE_ENV !== 'test') {
            console.log('Servidor arrancado en el puerto 9000')
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
