var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, './config/.env') })

const API_PORT = 8000;
var app = express();
app.use(cors());
const router = express.Router();
app.engine('html',require('ejs').renderFile);


const config = {
  key: fs.readFileSync(path.resolve(__dirname, './certs/pioneers.kaist.ac.kr.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './certs/pioneers.kaist.ac.kr.pem'))
};

// https.createServer(config, (req, res) => {
//   res.writeHead(200);
//   res.end("Hello World!")
// }).listen(8000);

https.createServer(config, app).listen(8000);

// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


// this is our MongoDB database
// const dbRoute =
  // "mongodb://kaist2020:nanomechanics123@localhost:27017/rnl_web";

const dbRoute =
  "mongodb://"+process.env.MONGO_ID+":"+process.env.MONGO_PW+"@localhost:27017/conf2020?authSource=admin";

const options = {
  useNewUrlParser: true,
  useFindAndModify: false
};

// connects our back end code with the database
mongoose.connect(dbRoute, options);
let db = mongoose.connection;


// console.log(db)
db.once('open', () => 
	console.log('connected to the database\n')
);

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// console.log(db.collections)

var landingRouter = require('./routes/landing.js');
var registerRouter = require('./routes/register.js');


// view engine setup
app.use(express.static(path.join(__dirname, 'build')));
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/landing', landingRouter);
app.use('/api/register', registerRouter);


app.get('/',(req,res)=>{  
  res.redirect('http://pioneers.kaist.ac.kr');
})  //req = request 객채 , res = response 객채

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field)
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});



module.exports = app;
// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

