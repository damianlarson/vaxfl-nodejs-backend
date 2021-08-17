const express = require('express');

const app = express();
const port = process.env.port || 8080;
const cors = require('cors');
const router = require('./route/routes');

app.use(cors());
app.use('/', router);
app.listen((port), () => {
  console.log("We're live, pal");
});
