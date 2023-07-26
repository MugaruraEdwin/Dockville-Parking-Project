const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

const systemRoutes = require('./controllers/systemRoutes')

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', systemRoutes)


app.listen(3000,() => {
    console.log('listening on port 3000')
})