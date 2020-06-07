const express  = require('express');
const apiRoute = require('./routes/api/index');
const bodyParser = require('body-parser');
// If you can't write index then it's okay

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

app.use('/api', apiRoute);


app.listen(3000);
