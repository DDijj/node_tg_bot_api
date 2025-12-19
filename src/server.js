import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function startServer(bot) {
    const app = express();
    app.use(express.json());

    // 健康檢查
    app.get('/', (req, res) => {
        res.send('OK');
    });

    // ⭐ 讓 mini-app 能被存取
    app.use('/mini-app', express.static(
        path.join(__dirname, '../mini-app')
    ));

    app.listen(3000, () => {
        console.log('🌐 Web API running on port 3000');
    });
}
