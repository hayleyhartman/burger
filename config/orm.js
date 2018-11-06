// Import (require) connection.js into orm.js

var connection = require('./connection')

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, colNames, vals, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " ("
        queryString += colNames.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length)
        queryString += ") "

        console.log(queryString)
        connection.query(queryString, [tableInput, colNames, valueName, valueDev], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

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