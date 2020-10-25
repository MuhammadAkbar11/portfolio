const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, '../../', 'build')));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.listen(port);
console.log('server started on port ', port);
