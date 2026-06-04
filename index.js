const express = require('express');
const lodash = require('lodash');
const minimist = require('minimist');
const axios = require('axios');

const app = express();
const port = 3000;

// Simple usage of minimist
const args = minimist(process.argv.slice(2));
console.log('Parsed arguments:', args);

app.use(express.json());

// Prototype pollution endpoint demo using lodash (vulnerable version)
app.post('/update', (req, res) => {
    const target = {};
    const source = req.body;
    // Lodash merge is vulnerable to prototype pollution in 4.17.15
    lodash.merge(target, source);
    res.json({ message: "Merged successfully", result: target });
});

// SSRF endpoint demo using axios (vulnerable version)
app.get('/fetch', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
