require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected! 🔌'))
    .catch(err => {
        console.log(err);
    });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, (err) => {
    if (err) {
        return console.log('erro');
    }
    console.log(`Servidor iniciado em http://localhost:${PORT} ✳️`);
})
