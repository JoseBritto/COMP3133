const express = require('express');
const socketio = require('socket.io');

const SERVER_PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static('views')); -- Any will work this or one below
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/client.html');
});



const server = app.listen(SERVER_PORT, () => {
    console.log('Server running on http://localhost:'+ SERVER_PORT);
});

let ioServer = socketio(server);

ioServer.on("connection", (socket) => {
    console.log('Connection Received');
    console.log(`Client Socket ID: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Client Disconnected: ${socket.id}`);
    });

    socket.on('hello', (msg) => {
        console.log(`Hello from: ${msg}`);
        const obj = {
            status: true,
            id: socket.id,
            msg: 'Welcome to chat server'
        }
        socket.emit('welcome', obj);
    });

    socket.on('chat_message', (message) => {
        console.log(`New message received: ${socket.id} || ${message}`);
        //ioServer.emit('new_message', message); // to all clients

        socket.broadcast.emit('new_message', message); // to all others
    });

    socket.on('join_group', (group_name) => {
        socket.join(group_name);
        ioServer.to(group_name).emit('new_message', 'world');
    });


    socket.on('leave_group', (group_name) => {
        socket.leave(group_name);
    });

});
