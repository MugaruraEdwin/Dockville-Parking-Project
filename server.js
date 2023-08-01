const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConfig');
const port = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname,'public')));

const systemRoutes = require('./controllers/systemRoutes')
connectDB();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', systemRoutes)


app.listen(port,() => {
    console.log(`Server is now running at http://localhost:${port}`)
})