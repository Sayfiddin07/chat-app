import Redis from "ioredis";

export default class RedisHelper {
    #redis;
    constructor() {
        this.#redis = new Redis({
            host: "localhost",
            port: 63791, // Corrected typo here
        });
        this.#redis.on('error', (error) => {
            console.error('Error connecting to Redis', error);
        });
    }

    consume(channel, callback) {
        this.#redis.subscribe(channel, (err) => {
            if (err) {
                console.error('Error subscribing to channel:', err);
                return false;
            }
        });

        this.#redis.on('message', (channel, message) => {
            callback(message); // Use a callback to handle the message.
        });
    }

    produce(channel, message) {
        return new Promise((resolve, reject) => {
            this.#redis.publish(channel, JSON.stringify(message), (err, count) => {
                if (err) {
                    console.error('Error publishing message:', err);
                    reject(err);
                    return;
                }
                console.log(`Message published to ${count} subscribers.`);
                resolve(count);
            });
        });
    }
}
