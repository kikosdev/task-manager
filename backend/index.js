const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
var bodyParser = require('body-parser');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("X-Frame-Options", "ALLOW-FROM http://localhost:5173", ""); // restrict it to the required domain
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Authorization,X-Frame-Options');
  res.set('Cache-Control', 'public');
  if (req.method == 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
   }
});

//routes
app.use("/api/v1/tasks", require("./routes/v1/taskRoutes.js"));

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})