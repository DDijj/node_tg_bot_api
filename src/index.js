import { fileURLToPath } from 'url';
// import path from 'path';
import require from 'requirejs';
const __filename = fileURLToPath(import.meta.url);

console.log('🔥🔥🔥 I AM RUNNING THIS FILE 🔥🔥🔥', __filename);
const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });
bot.sendMessage(chatId, '開啟遊戲', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: '🎮 開啟遊戲',
          web_app: { url: 'https://ddijj.github.io' }
        }
      ]
    ]
  }
});
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = `
🤖 機器人功能介紹

一、自動發片
將我邀請進頻道或群組，我會定時自動發送內容。

二、資源自定義
① 使用公有資源
② 建立私有資源

三、廣告自定義
① 底部輪播廣告
② 定時推送廣告
`;

  bot.sendMessage(chatId, text, {
    reply_markup: {
      inline_keyboard: [
        [{ text: '➕ 邀請機器人', callback_data: 'invite' }],
        [{ text: '📂 個人頻道｜群列表', callback_data: 'list' }],
        [{ text: '⬆️ 上傳私有數據源', callback_data: 'upload' }],
        [
          { text: '⚙️ 底部輪播廣告庫', callback_data: 'ads_bottom' },
          { text: '⏰ 定時推送廣告庫', callback_data: 'ads_schedule' }
        ]
      ]
    }
  });
});
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  switch (query.data) {
    case 'invite':
      bot.sendMessage(chatId, '請把我邀請進你的頻道或群組');
      break;

    case 'list':
      bot.sendMessage(chatId, '這裡會列出你的頻道與群');
      break;

    case 'upload':
      bot.sendMessage(chatId, '請上傳你的私有資源');
      break;

    case 'ads_bottom':
      bot.sendMessage(chatId, '底部輪播廣告設定');
      break;

    case 'ads_schedule':
      bot.sendMessage(chatId, '定時推送廣告設定');
      break;
  }

  bot.answerCallbackQuery(query.id);
});