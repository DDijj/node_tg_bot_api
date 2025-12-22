import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const token = process.env.BOT_TOKEN || '你的TOKEN';

// ✅ polling 一定要開
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Telegram Bot polling started');

// （可選）Web API
const app = express();
app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('🌐 Web API running on port 3000');
});

// 一定要有，不然你會以為沒連到
bot.on('message', (msg) => {
  console.log('📩 收到:', msg.text);
  bot.sendMessage(msg.chat.id, '我有收到');
});