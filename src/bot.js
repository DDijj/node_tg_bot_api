// src/bot.js
import TelegramBot from 'node-telegram-bot-api';

let botInstance;

export function createBot() {
    if (botInstance) return botInstance;

    const token = process.env.BOT_TOKEN;
    if (!token) {
        throw new Error('❌ BOT_TOKEN not found in env');
    }

    botInstance = new TelegramBot(token, {
        polling: false // 🔴 一定要 false
    });

    return botInstance;
}
