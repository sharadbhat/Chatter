const express = require('express')
const app = express()
const path = require('path')
const uuid = require('uuid').v4
const http = require('http').Server(app)

let port = process.env.PORT || 80

let io = null
if (process.env.ENV === 'production') {
    io = require('socket.io')(http)
} else {
    io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    })
}

if (process.env.ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'))
    })
}

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

http.listen(port, function() {
    console.log('listening for requests on port ' + port)
})