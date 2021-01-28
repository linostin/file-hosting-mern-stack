const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const config = require("config");

// const corsMiddleware = require("./middleware/cors.middleware");

const app = express();

app.use(cors());

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get("serverPort") || 5000;
// const authRouter = require("./routes/auth.routes");
// app.use(corsMiddleware);





const start = async () => {
  try {
    await mongoose.connect(
      config.get("dbUrl"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error) => {
        if (error) {
          console.log(error.message);
          console.log("MongoDB Error");
          throw error
        } else {
          console.log("MongoDB Connected");
        }
      }
    );
    app.listen(PORT, () => {
      console.log(`The server has started on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Server ERROR: ", error.message);
    process.exit(1);
  }
};



start();
