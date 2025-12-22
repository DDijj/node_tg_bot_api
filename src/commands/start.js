export default function startCommand(bot) {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '歡迎使用機器人');
  });
}