export function registerKeyboards(bot) {
    bot.onText(/控制台/, (msg) => {
        console.log('📥 控制台 handler triggered');

        bot.sendMessage(msg.chat.id, '開啟控制面板', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '🖥 打開面板',
                            web_app: {
                                url: 'https://sariah-superintolerable-bart.ngrok-free.dev/mini-app'
                            }
                        }
                    ]
                ]
            }
        });
    });
}
bot.sendMessage(chatId, '開啟遊戲', {
    reply_markup: {
        inline_keyboard: [[
            {
                text: '🎮 開啟 Mini App',
                web_app: {
                    url: 'https://sariah-superintolerable-bart.ngrok-free.dev/mini-app'
                }
            }
        ]]
    }
});

export function registerBuiltinKeyboards(bot) {
    bot.on('callback_query', (q) => {
        bot.answerCallbackQuery(q.id, { text: '收到 callback' });
    });
}