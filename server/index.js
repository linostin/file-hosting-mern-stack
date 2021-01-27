const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")

const PORT = config.get('serverPort')
const app = express()
app.use("api/auth", authRouter)
app.use(express.json());

const start = async () => {
  try {
    console.log(req.body)
    await mongoose.connect(config.get('dbUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
  })
    app.listen(PORT, () => {
      console.log('Server has been started on port: ', PORT)
    })
  } catch (e) {
    
  }
}

start()