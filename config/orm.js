// Import (require) connection.js into orm.js

var connection = require('./connection')

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
    selectAll: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, colNames, values, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES ?? = ?";
        connection.query(queryString, [tableInput, colNames, values], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableInput, colName, colVal, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ??";
        connection.query(queryString, [tableInput, colName, colVal, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}



module.exports = orm;

// Export the ORM object in module.exports.