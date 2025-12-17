// 指令：/start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Bot is running.');
});

// 指令：/app
bot.onText(/\/app/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Open Mini App 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Mini App',
            web_app: {
              url: process.env.MINI_APP_URL
            }
          }
        ]
      ]
    }
  });
});

// Mini App 回傳
bot.on('web_app_data', (msg) => {
  const data = msg.web_app_data.data;
  bot.sendMessage(msg.chat.id, `Mini App says: ${data}`);
});

// 貼圖
bot.on('sticker', (msg) => {
  bot.sendMessage(msg.chat.id, 'Nice sticker 👍');
});

// ❗️最後才放 fallback
bot.on('message', (msg) => {
  if (msg.text?.startsWith('/')) return; // 指令已處理
  if (msg.sticker) return;               // 貼圖已處理
  if (msg.web_app_data) return;           // Mini App 已處理

  bot.sendMessage(msg.chat.id, 'I see your message.');
});