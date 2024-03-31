import {Server as HttpServer} from 'http';
import {Server as IOServer} from 'socket.io';
import Redis from 'ioredis';

const http = new HttpServer();
const io = new IOServer(http, {
    cors: {
        origin: "http://localhost:8000"
    }
});
const redis = new Redis();

redis.subscribe('message-sent');

io.on('connection', (socket) => {
    console.log('A user connected');

    redis.on('message', (channel, message) => {
        const data = JSON.parse(message).data
        io.emit('message-sent', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


http.listen(4200, () => {
    console.log('Server is running on port 4200')
})
