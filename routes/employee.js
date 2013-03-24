var utils = require('../utils/text');
var async = require('async');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
        name: {type: String, required: true},
        number: {type: String},
        idNum: {type: String, required: true}
    }
);

var Employee = mongoose.model('Employee', schema);

exports.insert = function (req, res) {
    var employee = new Employee();
    employee.name = req.body.name;
    employee.number = req.body.number;
    employee.idNum = req.body.idNum;
    employee.save(function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};


exports.find = function (req, res) {
    Employee
        .findOne({_id: req.params.id})
        .exec(function (err, doc) {
            if (!err) {
                res.json(doc);
            }
            else {
                res.json(err);
            }
        });
};


exports.list = function (req, res) {
    Employee
        .find()
        .sort('name')
        .exec(function (err, docs) {
            res.json(docs);
        });

}