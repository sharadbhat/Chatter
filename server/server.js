const app = require('express')()
const uuid = require('uuid').v4
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {

    // Handle chat event
    socket.on('message', data => {
        io.sockets.emit('message', {
            uuid: uuid(),
            ...data
        })
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