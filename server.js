const express = require('express');
const app = express();
const cors = require("cors");
const { CONTACT } = require('./Resources/data');
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get('/contact', (req, res) => {
    res.json(CONTACT)
})
app.listen(PORT, () => { console.log('listening on 5000') })