import {Server as HttpServer} from 'http';
import {Server as IOServer} from 'socket.io';
import RedisHelper from "./RedisHelper.js";
//
// const http = new HttpServer();
// const io = new IOServer(http, {
//     cors: {
//         origin: "http://localhost:8000"
//     }
// });

// const subscriber = new RedisHelper()
//
// subscriber.consume('message_sent', (data) => {
//     console.log('+' + data + '+');
// })

const producer = new RedisHelper();

producer.produce('channel_produce', {success: false})
//
// http.listen(4200, () => {
//     console.log('Server is running on port 4200')
// })
