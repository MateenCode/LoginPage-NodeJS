//Middle ware being used
const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

//engine being used
var sessions
var app = express();
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

//session is being used
app.use(session({
  secret: 'Cash',
  resave: false,
  saveUninitialized: true
}));

//retrieving all the proper routers
app.get('/', function(request, respond){
  respond.render('index')
});

var user


app.post('/login', function(request, response){

  if(request.body.username == 'admin' && request.body.password == '123'){
    // session = request.session.username






  if (!request.session.username) {
    user = request.session.user = {}
    console.log(user)
  }

   user.username = request.body.username

  console.log(user)

  console.log(request.session)

    response.render('logout')

    //response.rendor('/login')
  }
  else{
   response.render('index')
  }
});

app.post('/destroy', function(request, response){
   request.session.destroy();
   console.log(session)
  response.render('index');
})




// the serve is set to port 3000
app.listen(3000, function(){
  console.log('THE SERVE IS RUNNGIN!');
});
