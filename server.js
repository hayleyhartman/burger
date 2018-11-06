var express = require('express')
var app = express()
var path = require('path')
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, '/public')));

var PORT = process.env.PORT || 8000;

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

