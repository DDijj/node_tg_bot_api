export default (bot) => {
  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, '/start /help /quote');
  });
};