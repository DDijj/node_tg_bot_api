export default function messages(bot) {
  bot.on('message', (msg) => {
    if (!msg.text) return;

    bot.sendMessage(msg.chat.id, `你說了：${msg.text}`);
  });
}