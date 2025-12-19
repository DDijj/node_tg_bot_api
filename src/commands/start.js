export default (bot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bot is running.');
  });
};
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '開啟遊戲', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: '🎮 開始遊戲',
          web_app: {
            url: 'https://sariah-superintolerable-bart.ngrok-free.dev/mini-app/index.html'
          }
        }
      ]]
    }
  });
});
