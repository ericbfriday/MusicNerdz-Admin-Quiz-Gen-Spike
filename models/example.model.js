var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    exampleKey: Number,
    exampleKey2: String
});

var ExampleModel = mongoose.model('example', Schema);

module.exports = ExampleModel;