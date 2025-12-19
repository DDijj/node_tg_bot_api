import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

export function startServer(bot) {
    const app = express();
    app.use(express.json());

    // ✅ ES Module 必須這樣拿 __dirname
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // ✅【關鍵】提供 mini-app 靜態檔案
    app.use(express.static(path.join(__dirname, '../mini-app')));

    // 健康檢查
    app.get('/', (req, res) => {
        res.send('OK');
    });

    // Bot API
    app.post('/api/send', (req, res) => {
        const { chatId, text } = req.body;
        if (!chatId || !text) {
            return res.status(400).json({ error: 'missing params' });
        }
        bot.sendMessage(chatId, text);
        res.json({ ok: true });
    });

    app.listen(3000, () => {
        console.log('🌐 Web API running on port 3000');
    });
}
