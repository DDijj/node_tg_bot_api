export function registerMessages(bot) {
  bot.on('message', (msg) => {
    if (msg.text && !msg.text.startsWith('/')) {
      bot.sendMessage(msg.chat.id, `你說的是：${msg.text}`);
    }
  });
}