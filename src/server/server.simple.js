const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();

DIRNAME = path.join(__dirname, '..', '..', 'dist');

const HTMLFILE = path.join(DIRNAME, 'index.html');

app.use(express.static(DIRNAME));

app.get('*', function (req, res) {
  res.sendFile(HTMLFILE, err => {
    if (err) res.status(500).send(err);
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
