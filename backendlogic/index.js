const express = require('express');
const app = express();
const users = require('./users.json');
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(4000, () => {
  console.log('started')
});
