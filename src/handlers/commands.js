export function registerCommands(bot) {
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, '歡迎使用機器人');
    });

    bot.onText(/\/help/, (msg) => {
        bot.sendMessage(msg.chat.id, '可用指令：/start /help');
    });
}