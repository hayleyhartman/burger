var express = require('express')

var orm = require("./config/orm");

var app = express()

var PORT = process.env.PORT || 8000;

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});



//cat project only had orm functions in this