import 'dotenv/config';
import axios from 'axios';
import fs from 'fs/promises';
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

bot.onText(/\/quote/, async (msg) => {
  const res = await axios.get('https://api.quotable.io/random');
  bot.sendMessage(msg.chat.id, res.data.content);
});

bot.on('sticker', async (msg) => {
  const log = {
    from: msg.from.username,
    file_id: msg.sticker.file_id,
    date: new Date().toISOString()
  };

  await fs.appendFile(
    'sticker.log',
    JSON.stringify(log) + '\n'
  );

  bot.sendMessage(msg.chat.id, 'Sticker logged.');
});

bot.on('text', (msg) => {
  bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
});

bot.on('sticker', (msg) => {
  bot.sendMessage(msg.chat.id, 'I see a sticker 👀');
});