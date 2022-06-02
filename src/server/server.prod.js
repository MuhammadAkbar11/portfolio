const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const STATIC_FILE = path.join(__dirname, '../../', 'build');

app.use(express.static(STATIC_FILE));

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

app.get('/api', (req, res, next) => {
  res.json({ message: 'Hello Akbar' });
});

app.get('*', function (req, res) {
  const HTMLFILE = path.join(STATIC_FILE, 'index.html');
  res.sendFile(HTMLFILE, err => {
    if (err) res.status(500).send(err);
  });
});

app.listen(PORT);
console.log('server started on port ', PORT);
