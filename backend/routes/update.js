var express = require('express');
var router = express.Router();
var Task = require('../models/task');//数据集合


router.post("/", function(req, res, next){
    var task = req.body;
    Task.find({title:task.title},function(err,result) {
        if (err) {
            console.log("res error");
        } else {
            var newData = {$set: {checked: task.checked}}
            var oldValue = {title: result[0].title};
            console.log(oldValue.title);
            Task.update(oldValue, newData, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result.checked);
                }
            })
        }
    })
});

module.exports = router;