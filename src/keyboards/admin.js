bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '個人頻道 / 群列表') {
    await bot.sendMessage(chatId, '這裡是你的頻道列表');
  }

  if (msg.text === '定時推送廣告庫') {
    await bot.sendMessage(chatId, '廣告排程設定中');

  });
}
EOF