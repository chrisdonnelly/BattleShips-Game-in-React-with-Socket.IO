var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html')
});

io.on('connection', function (socket) {
    socket.on('chat', (message) => {
        io.sockets.emit('chat', message);
    });
});

