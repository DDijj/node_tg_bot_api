export function registerHandlers(bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      '選一個功能',
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: '點擊賺分', callback_data: 'click' }],
            [{ text: '說明', callback_data: 'help' }]
          ]
        }
      }
    );
  });

  bot.on('callback_query', (q) => {
    bot.answerCallbackQuery(q.id);

    if (q.data === 'click') {
      bot.sendMessage(q.message.chat.id, '你點了按鈕');
    }

    if (q.data === 'help') {
      bot.sendMessage(q.message.chat.id, '這是說明');
    }
  });

  bot.on('message', (msg) => {
    console.log('📩 收到:', msg.text);
  });
}