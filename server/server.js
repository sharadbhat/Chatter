const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

    // Handle chat event
    socket.on('message', data => {
        io.sockets.emit('message', data)
    })

    // Handle typing event
    socket.on('typingStart', data => {
        io.sockets.emit('typingStart', data)
    })

    socket.on('typingEnd', data => {
        io.sockets.emit('typingEnd', data)
    })
})

http.listen(8000, function() {
    console.log('listening for requests on port 8000')
})