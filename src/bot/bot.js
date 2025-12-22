import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";
import { handleStart, handleCallbackQuery } from "./bot/handlers.js";
import e from "express";

export const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("❌ BOT_TOKEN not found in .env");
  process.exit(1);
}
const bot = new TelegramBot(token, {
  polling: true,
});

bot.on("message", async (msg) => {
  console.log(msg);
});

bot.onText(/\/start/, (msg) => {
  handleStart(bot, msg);
});

bot.on("callback_query", (q) => {
  handleCallbackQuery(bot, q);
});

console.log("✅ Bot running in polling mode");