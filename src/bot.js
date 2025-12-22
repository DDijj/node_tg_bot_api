import TelegramBot from 'node-telegram-bot-api';

let botInstance;

export function createBot() {
  if (botInstance) return botInstance;

  const token = process.env.BOT_TOKEN;
  if (!token) throw new Error('BOT_TOKEN not set in env');

  const webhookUrl = process.env.WEBHOOK_URL || '';

  if (webhookUrl) {
    botInstance = new TelegramBot(token, { webHook: true });
    const webhookPath = `/bot${token}`;
    const fullUrl = webhookUrl.replace(/\/$/, '') + webhookPath;
    botInstance.setWebHook(fullUrl).then(() => {
      console.log('✅ Webhook set to', fullUrl);
    }).catch((err) => {
      console.error('❌ setWebHook error', err && err.stack ? err.stack : err);
    });
  } else {
    botInstance = new TelegramBot(token, { polling: true });
    console.log('🤖 Telegram Bot polling started');
  }

  return botInstance;
}

export default createBot;
import TelegramBot from 'node-telegram-bot-api';

let botInstance;

export function createBot() {
  if (botInstance) return botInstance;

  const token = process.env.BOT_TOKEN;
  if (!token) {
    throw new Error('❌ BOT_TOKEN not found in env');
  }

  // 如果有設定 WEBHOOK_URL，使用 webhook 模式
  const webhookUrl = process.env.WEBHOOK_URL || '';
  if (webhookUrl) {
    botInstance = new TelegramBot(token, { webHook: true });
    // 設定 webhook 到指定路徑 /bot<TOKEN>
    const webhookPath = `/bot${token}`;
    const fullUrl = webhookUrl.replace(/\/$/, '') + webhookPath;
    // Non-blocking setWebhook
    botInstance.setWebHook(fullUrl).then(() => {
      console.log('✅ Webhook set to', fullUrl);
    }).catch((err) => {
      console.error('❌ setWebHook error', err && err.stack ? err.stack : err);
    });
  } else {
    // 預設回退：polling
    botInstance = new TelegramBot(token, { polling: true });
  }

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

