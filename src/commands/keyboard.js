export default function keyboardCommand(bot) {
  bot.onText(/\/menu/, (msg) => {
    bot.sendMessage(msg.chat.id, '請選擇功能', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🎮 開啟遊戲',
              web_app: { url: process.env.WEB_APP_URL }
            }
          ],
          [
            {
              text: '📊 狀態',
              callback_data: 'STATUS'
            }
          ]
        ]
      }
    });
  });

  bot.on('callback_query', (query) => {
    if (query.data === 'STATUS') {
      bot.sendMessage(query.message.chat.id, '機器人運作中');
    }
  });
}