const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Does My Pipeline STILL Works again!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
