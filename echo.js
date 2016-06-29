var express = require('express');

var app = express();

app.get('/headers', function(request, response) {
    response.json({
      host: request.headers.host,
      'user-agent': request.headers['user-agent'],
      accept: request.headers.accept,
    });
});

app.get('/headers/:header_name', function(request, response) {
    var headerName = request.params.header_name;
    var headerTemp = {};
    headerTemp[headerName] = request.headers[headerName];
    response.json(headerTemp);
});

app.listen(8080);
