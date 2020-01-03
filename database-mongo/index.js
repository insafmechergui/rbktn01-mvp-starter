var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {  useMongoClient: true,});
mongoose.Promise = Promise;


var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var patientSchema = mongoose.Schema({
  name: String,
  date: Date,
  address: String,
  phone: Number,
  disease: String,
  medication: String
});

var Patient = mongoose.model('Patient', patientSchema);

var selectAll = function(callback) {
  Patient.find({}, function(err, patients) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, patients);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Patient = Patient;