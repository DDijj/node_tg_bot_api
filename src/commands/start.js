export default (bot) => {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bot is running.');
  });
};