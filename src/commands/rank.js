export default (bot) => {
  bot.onText(/\/rank/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bot is running.');
  });
};