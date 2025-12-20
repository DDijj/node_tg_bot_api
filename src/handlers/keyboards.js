bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'INVITE_BOT') {
        await bot.sendMessage(chatId, '你點了「邀請機器人」');
    }

    if (data === 'UPLOAD_PRIVATE') {
        await bot.sendMessage(chatId, '你點了「上傳私有資料源」');
    }

    await bot.answerCallbackQuery(query.id);
});