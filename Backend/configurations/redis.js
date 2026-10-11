// const { createClient } = require("redis");

// const redisClient = createClient({
//     // url: "redis://host.docker.internal:6379"
//     url: process.env.REDIS_URL || "redis://redis:6379"
// });

// redisClient.on("error", (err) => {
//     console.error("Failed to connect with Redis !", err);
// });

// module.exports = redisClient;

const { createClient } = require("redis");

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

module.exports = client;