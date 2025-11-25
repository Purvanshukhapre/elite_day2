const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const homerouter = require('./routes/Home')
require('dotenv').config();
require('./model/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/home', homerouter);

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello world</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node server running on port ${PORT}`);
});