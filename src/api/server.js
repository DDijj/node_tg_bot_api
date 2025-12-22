import express from 'express';

export function createServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send('OK');
  });

  app.listen(3000, () => {
    console.log('🌐 Web API running on port 3000');
  });
}