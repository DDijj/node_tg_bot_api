import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ⭐⭐ 關鍵：static 指到 mini-app
app.use(express.static(path.join(__dirname, '../../mini-app')));

app.listen(3000, () => {
  console.log('🌐 Web server running on port 3000');
});
