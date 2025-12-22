import TelegramBot from 'node-telegram-bot-api';

/**
 * 建立並回傳 bot 實例
 * 只在這裡 new TelegramBot（唯一）
 */
export default function createBot(token) {
  const bot = new TelegramBot(token, {
    polling: true,
  });

  /* 基本生命訊號 */
  bot.on('polling_error', (err) => {
    console.error('❌ polling_error:', err.message);
  });

  return bot;
}