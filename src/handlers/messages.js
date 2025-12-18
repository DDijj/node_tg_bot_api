bot.on('message', (msg) => {
  if (msg.web_app_data) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    const data = JSON.parse(msg.web_app_data.data);
    const { address, score } = data;

    scores.set(address, score);

    bot.sendMessage(
      chatId,
      `✅ 成績已送出\n\n錢包：${address}\n分數：${score}`
    );
  }
});
