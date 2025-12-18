import TelegramBot from "node-telegram-bot-api";
import express from "express";
import dotenv from "dotenv";
import "./bot.js";
import app from "./api.js";
import "dotenv/config";
import "./bots/botA.js";
import "./bots/botB.js"; // 之後再加
import app from "./api/server.js";

app.listen(6067, () => {
  console.log("API server running");
});
dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);
const app = express();

app.use(express.json());

// Telegram webhook 入口
app.post("/webhook", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// /start 指令 + 按鈕
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "請選擇功能 👇", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📌 功能 A", callback_data: "A" }],
        [{ text: "📊 功能 B", callback_data: "B" }],
        [{ text: "❓ 說明", callback_data: "HELP" }]
      ]
    }
  });
});

// 按鈕 callback 處理
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  switch (query.data) {
    case "A":
      bot.sendMessage(chatId, "你點了 功能 A");
      break;
    case "B":
      bot.sendMessage(chatId, "你點了 功能 B");
      break;
    case "HELP":
      bot.sendMessage(chatId, "這是一個使用 ngrok + webhook 的機器人");
      break;
  }

  // 一定要回覆 callback（不然 Telegram 會轉圈）
  bot.answerCallbackQuery(query.id);
});

// Cloud / ngrok 用
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Webhook server running on port", PORT);
});