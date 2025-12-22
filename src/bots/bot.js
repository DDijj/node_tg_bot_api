import TelegramBot from 'node-telegram-bot-api';

export function createBot(token) {
  const bot = new TelegramBot(token, { polling: true });
  console.log('🤖 Telegram Bot polling started');
  return bot;
}