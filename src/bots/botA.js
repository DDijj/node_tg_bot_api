import TelegramBot from "node-telegram-bot-api";
import { bots } from "../config/bots.js";
import { adminKeyboard } from "../keyboards/admin.js";
import { handleAdminCallback } from "../handlers/admin.js";

const bot = new TelegramBot(bots.admin.token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "管理面板", {
    reply_markup: adminKeyboard
  });
});

bot.on("callback_query", (query) => {
  handleAdminCallback(bot, query);
});

export default bot;