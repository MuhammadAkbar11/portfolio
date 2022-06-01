const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, '../../', 'build')));

app.get('/api/projects', async (req, res, next) => {
  try {
    const getProjects = await axios.get(`${API_URL}/projects`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    res.json({ ...getProjects.data });
  } catch (error) {
    error.message = error.message || 'Something went wrong';
    res.status(error.statusCode || 500).json({ ...error });
  }
});

app.get('/api/skills', async (req, res, next) => {
  try {
    const getSkills = await axios.get(`${API_URL}/skills`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    res.json({ ...getSkills.data });
  } catch (error) {
    error.message = error.message || 'Something went wrong';
    res.status(error.statusCode || 500).json({ ...error });
  }
});

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../../', 'build', 'index.html'));
});

app.listen(port);
console.log('server started on port ', port);
