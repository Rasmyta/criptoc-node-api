import express from 'express'
import config from './config'
import router from './router'
import mongoose from 'mongoose'

let _server
const port = process.env.PORT || 9000

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

        _server = app.listen(port, () => {
          if (process.env.NODE_ENV !== 'test') {
            console.log('Server running at port ' + port)
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
