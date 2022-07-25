require('dotenv').config()
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const { PORT, MONGO_URI } = process.env
const api = require('./api')
const app = new Koa()
const router = new Router()

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
}).catch(e => {
  console.error(e)
})

router.use('/api', api.routes())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
const port = PORT || 4000
app.listen(port, () => {
  console.log(`Listening to port %d`, port)
})