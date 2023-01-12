const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const path = require('path');
const PORT = 3000

// create express app
const app = express();

// parses incoming request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// import routers
const recipeRouter = require(path.join(__dirname, '/routes/recipeRoutes.js'));

// set up route
app.use('/recipe', recipeRouter);

app.get('/signup', (req, res) => {
  res.sendStatus(200);
})


// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve('../components/index.html'));
// })

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'Internal service error'}
  };
  const errObj = Object.create({}, defaultErr, err)
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// suppress mongoose warning
mongoose.set('strictQuery', true);

// connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // start server, listen for requests
    console.log('Connected to database');
    app.listen(PORT, () => console.log('Server listening on port', PORT));
  })
  .catch(err => {
    console.log(err)
  })
