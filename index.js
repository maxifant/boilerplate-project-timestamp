// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:time', (req, res) => {
  console.log(typeof req.params.time)
  const date = new Date(req.params.time);

  console.log(date[Symbol.toPrimitive]('string'));
  // expected output: "Fri Dec 20 2019 14:48:00 GMT+0530 (India Standard Time)"

  console.log(date[Symbol.toPrimitive]('number'));
// expected output: 1576833480000



  res.send(req.params.time)
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
