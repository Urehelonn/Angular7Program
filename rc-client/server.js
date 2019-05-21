const http = require('http');
const app = require('./server/app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
var mysql = require('mysql')

//bodyparser set up to get data from req
app.use(bodyparser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);

//mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'some_secret',
  database: 'the_app_database'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

server.listen(port);