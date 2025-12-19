export function registerCommands(bot) {
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, '歡迎使用機器人');
    });

    bot.onText(/\/help/, (msg) => {
        bot.sendMessage(msg.chat.id, '可用指令：/start /help');
    });
}
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '開啟遊戲', {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: '🎮 開始遊戲',
                    web_app: {
                        url: 'https://sariah-superintolerable-bart.ngrok-free.dev/mini-app/'
                    }
                }
            ]]
        }
    });
});
