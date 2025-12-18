import TelegramBot from "node-telegram-bot-api";
import { adminKeyboard } from "../keyboards/admin.js";

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  webHook: { port: false }
});

bot.setWebHook(`${process.env.PUBLIC_URL}/bot`);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "管理面板", {
    reply_markup: adminKeyboard
  });
});

export default bot;