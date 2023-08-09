const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConfig');
const port = process.env.PORT || 4000;

const app = express();

const systemRoutes = require('./controllers/systemRoutes')
const managerRoutes = require('./controllers/managerRoutes')
const parkerRoutes = require('./controllers/parkerRoutes')
const batteryRoutes = require('./controllers/batteryRoutes')
const tyreRoutes = require('./controllers/tyreRoutes')
// const receiptRoutes = require('./controllers/receiptRoutes')

app.locals.amount = 0;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

connectDB();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', systemRoutes)
app.use('/api', managerRoutes)
app.use('/api', parkerRoutes)
app.use('/api', batteryRoutes)
app.use('/api', tyreRoutes)
// app.use('/api', receiptRoutes)



app.listen(port,() => {
    console.log(`Server is now running at http://localhost:${port}`)
})