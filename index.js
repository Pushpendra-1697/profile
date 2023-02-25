const express = require('express');
const connect = require('./Configs/Configs');
const { auth } = require('./Middleware/Validate.middleware');
const { UserRouter } = require('./Routes/users.route');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//Inbuilt middlewares;
app.use(cors());
app.use(express.json());
app.use(express.text());

app.get('/', async (req, res) => {
    res.send('Welcome in Authentication App');
});

app.use('/', UserRouter);

app.use(auth);



app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Connected to DB`);
    } catch (err) {
        console.log({ msg: err.message });
    }
    console.log(`Server is listening on ${PORT}`);
});