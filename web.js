import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'mini-app')));

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('Mini App running on http://localhost:3000');
});
