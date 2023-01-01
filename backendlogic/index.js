const express = require('express');
const app = express();
const users = require('./users.json');
// const cors = require('cors');
// const admins = require('./admins.json');
// app.use(cors());
app.get('/users', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.send(users);
});
// app.get('/admins', (req, res) => {
//   res.send(admins);
// });
app.listen(3000, () => {});
