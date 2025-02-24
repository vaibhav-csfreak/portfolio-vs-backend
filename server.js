const express = require('express');
const app = express();
const cors = require("cors");
const { CONTACT } = require('./Resources/data');
app.use(cors());

app.get('/contact', (req, res) => {
    res.json(CONTACT)
})
app.listen(5000 || PORT, () => { console.log('listening on 5000') })