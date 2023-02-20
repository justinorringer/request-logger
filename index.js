const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

const requests = [];

app.get("/requests", (req, res) => {
  // send the array of requests
  res.send(requests);
});

app.use(morgan('common'), (req, res) => {
  if (req.path === "/favicon.ico") { // ignoring the icon request
    return;
  }

  // add the request to the array
  requests.push({
    path: req.path,
    headers: req.headers
  });
  res.send("Request recieved!");
});

app.listen(port, () => {
  console.log(`Request Logger listening on port ${port}`);
});
