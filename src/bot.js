import TelegramBot from 'node-telegram-bot-api';

let botInstance;

export function createBot() {
  if (botInstance) return botInstance;

  const token = process.env.BOT_TOKEN;
  if (!token) {
    throw new Error('❌ BOT_TOKEN not found in env');
  }

  botInstance = new TelegramBot(token);

  return botInstance;
}

export function registerKeyboards(bot) {
  bot.onText(/控制台/, (msg) => {
    bot.sendMessage(msg.chat.id, '測試按鈕', {
      reply_markup: {
        inline_keyboard: [
          [{ text: '✅ 我出現了', callback_data: 'TEST_OK' }]
        ]
      }
    });
  });

  bot.on('callback_query', (q) => {
    bot.answerCallbackQuery(q.id, { text: '收到 callback' });
  });
}

export function registerCommands(bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '歡迎使用機器人');
  });

  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, '可用指令：/start /help');
  });
}