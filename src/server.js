import express from 'express';

export function startServer(bot) {
    const app = express();
    app.use(express.json());

    // 健康檢查（很重要）
    app.get('/', (req, res) => {
        res.send('OK');
    });

    // 網頁控制 Bot 的 API
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