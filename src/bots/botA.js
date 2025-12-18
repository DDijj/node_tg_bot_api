const scores = new Map();
import TelegramBot from "node-telegram-bot-api";
import { adminKeyboard } from "../keyboards/admin.js";
import express from 'express';
import bot from './bot.js';

const app = express();
app.use(express.json());

app.post('/bot', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(8443, () => {
  console.log('Webhook server running');
});

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  webHook: { port: false }
});

bot.setWebHook(`${process.env.PUBLIC_URL}/bot`);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "管理面板", {
    reply_markup: adminKeyboard
  });
});
bot.on('message', (msg) => {
  if (msg.web_app_data) {
    const chatId = msg.chat.id;
    const data = JSON.parse(msg.web_app_data.data);

    bot.sendMessage(chatId, `✅ 錢包已綁定\n\n${data.address}`);
  }
});

export default bot;