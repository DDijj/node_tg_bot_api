bot.on('message', (msg) => {
  const keyboard = {
    reply_markup: {
      keyboard: [
        ['🟢 點擊賺分'],
        ['📊 我的狀態', '⚙️ 設定']
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  };

  bot.sendMessage(msg.chat.id, '請選擇功能', keyboard);
});
bot.on('text', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === '🟢 點擊賺分') {
    bot.sendMessage(chatId, '你點了一下，+1 分');
  }

  if (text === '📊 我的狀態') {
    bot.sendMessage(chatId, '目前分數:1');
  }
})