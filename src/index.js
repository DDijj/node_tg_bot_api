import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ BOT_TOKEN not found in .env');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    '選一個功能',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '點擊賺分', callback_data: 'click' }],
          [{ text: '說明', callback_data: 'help' }]
        ]
      }
    }
  );
});

bot.on('callback_query', (q) => {
  bot.answerCallbackQuery(q.id);

  if (q.data === 'click') {
    bot.sendMessage(q.message.chat.id, '你點了按鈕');
  }

  if (q.data === 'help') {
    bot.sendMessage(q.message.chat.id, '這是說明');
  }
});

console.log('✅ Bot running in polling mode');