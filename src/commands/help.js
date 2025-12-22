export default function helpCommand(bot) {
  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, '指令說明中…');
  });
}