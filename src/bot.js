import TelegramBot from 'node-telegram-bot-api';
import { BOT_TOKEN } from './config/env.js';

export function createBot() {
    const bot = new TelegramBot(BOT_TOKEN, {
        polling: true
    });

    console.log('🤖 Bot created');
    return bot;
    bot.onText(/\/reset/, (msg) => {
        bot.sendMessage(msg.chat.id, '已重設鍵盤', {
            reply_markup: { remove_keyboard: true }
        });
    });
}