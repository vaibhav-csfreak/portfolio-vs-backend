const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        address: "Bengaluru",
        phoneNo: "+91 7742479450",
        email: "vaibhavsingh12nie@gmail.com",
    })
})
app.listen(5000, () => { console.log('listening on 5000') })