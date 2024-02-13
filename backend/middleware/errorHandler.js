const express = require('express');
const app = express();

app.use(express.json()); // Ceci permet de lire les données JSON dans req.body
