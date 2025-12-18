import TelegramBot from 'node-telegram-bot-api';
import { BOT_TOKEN } from './config/env.js';

export function createBot() {
    const bot = new TelegramBot(BOT_TOKEN, {
        polling: true
    });

    console.log('🤖 Bot created');
    return bot;
}