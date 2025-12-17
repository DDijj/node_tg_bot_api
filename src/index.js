import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    'Bot is running.\nUse /help to see available commands.'
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    '/start - check bot status\n/help - show commands'
  );
});

// bot.on('message', (msg) => {
//   bot.sendMessage(msg.chat.id, 'Bot is alive.');
// });
bot.on('text', (msg) => {
  bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
});

bot.on('sticker', (msg) => {
  bot.sendMessage(msg.chat.id, 'I see a sticker 👀');
});