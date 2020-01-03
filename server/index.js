var express = require('express');
var bodyParser = require('body-parser');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var Patient = require('../database-mongo').Patient;

var app = express();
app.use(bodyParser());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/savePatient', (req, res, next) => {
  var pat = new Patient(req.body);
  pat.save()
  .then(item => {
    res.send("item saved to database");
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });

})

app.get('/displayPatient', (req, res, next) => {
  Patient.find({}).then(result => {
    res.send(result)
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

