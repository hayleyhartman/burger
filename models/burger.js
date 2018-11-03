var orm = require('../config/orm')

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result)
        })
    },
    insertOne: function (colNames, values, cb) {
        orm.insertOne("burgers", colNames, values, function(result) {
            cb(result)
        })
    },
    updateOne: function(colVal, condition, cb){
        orm.updateOne("burgers", colVal, condition, function(res) {
            cb(res)
        })
    }
}

module.exports = burger