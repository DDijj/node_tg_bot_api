export default (bot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bot is running.');
  });
};
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
