const express = require('express');
const ejs = require('ejs');
const qrcode = require('qrcode');
const port = process.env.port || 3000;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.render('index');
});

app.post('/scan', (req,res) => {
    const text = req.body.text;
    qrcode.toDataURL(text, (err, src) => {
        res.render('scan', {src});
    });
});

app.listen(port, () => console.log(`server running on port ${port}`));