import { createClient } from 'redis';

console.log('Redis Client Connecting');
console.log(
  'list out redis env',
  // log key and value of env that includes 'REDIS'
  Object.entries(process.env).filter(([key]) => key.includes('REDIS'))
);

// create instance in file scope
const client = await createClient({

});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// return instance
export default client;


// the server folder is just a made up convention
// but it makes it clear that the code here is for the server