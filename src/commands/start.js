export default (bot) => {
  bot.onText(/\/start/, (msg) => {
    console.log('[DEBUG] start handler invoked', msg.chat.id);
    const chatId = msg.chat.id;
    const text = `
🤖 機器人功能介紹

一、自動發片
將我邀請進頻道或群組，我會定時自動發送內容。

二、資源自定義
① 使用公有資源
② 建立私有資源

三、廣告自定義
① 底部輪播廣告
② 定時推送廣告
`;
    bot.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: '➕ 邀請機器人', callback_data: 'invite' }],
          [{ text: '📂 個人頻道｜群列表', callback_data: 'list' }],
          [{ text: '⬆️ 上傳私有數據源', callback_data: 'upload' }],
          [
            { text: '⚙️ 底部輪播廣告庫', callback_data: 'ads_bottom' },
            { text: '⏰ 定時推送廣告庫', callback_data: 'ads_schedule' }
          ]
        ]
      }
    });
  });
};
