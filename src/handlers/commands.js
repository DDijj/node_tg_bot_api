export function registerCommands(bot) {
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, '歡迎使用機器人');
    });

    bot.onText(/\/help/, (msg) => {
        bot.sendMessage(msg.chat.id, '可用指令：/start /help');
    });
}
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '請選擇操作', {
        reply_markup: {
            keyboard: [
                ['🌐 啟動 App'],
                ['🟢 點擊賺分']
            ],
            resize_keyboard: true
        }
    });
});