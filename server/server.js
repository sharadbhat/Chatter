var express = require('express')
var cors = require('cors')
var socket = require('socket.io')

// App setup
var app = express()
var server = app.listen(8000, function() {
    console.log('listening for requests on port 8000')
})

// Static files
app.use(express.static('public'))
app.use(cors())

// Socket setup & pass server
var io = socket(server)
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id)

    // Handle chat event
    socket.on('message', function(data) {
        io.sockets.emit('message', data)
    })

    // Handle typing event
    socket.on('typingStart', function() {
        io.sockets.emit('typingStart', {})
    })

    socket.on('typingEnd', function() {
        io.sockets.emit('typingEnd', {})
    })

})