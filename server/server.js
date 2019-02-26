const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require('./config/db_connection');
const path = require('path');

const router = require('./routes/api');
const app = express();

db.authenticate()
    .then(() => console.log("Successful connection"))
    .catch(err => console.log("bad connect"));


app.set('views',path.join(__dirname,'views'));
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: `${__dirname}/views`,
  partialsDir: `${__dirname}/views/partials`
}));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(router);

app.listen(8000, function () {
  console.log('Server is running at port 8000');
})