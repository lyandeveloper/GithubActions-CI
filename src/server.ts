import express from 'express';

const server = express();

server.listen(3333, () => {
  console.log('listening on port 3333');
});
