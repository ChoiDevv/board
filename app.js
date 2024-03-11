const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express test is over!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});