const redis = require('redis');
const client = redis.createClient(6379, 'redis');

client.on('error', (err) => {
    console.log('Error ' + err);
});

client.set('test_key', 'Hello World!', redis.print);

setTimeout(() => {
    client.get('test_key', (err, value) => {
        console.log(value)
    });
}, 1000);