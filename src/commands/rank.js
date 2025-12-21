export default (bot) => {
  bot.onText(/\/rank/, (msg) => {
    const chatId = msg.chat.id;
    const scores = global.scores || new Map();
    if (!scores || scores.size === 0) {
      bot.sendMessage(chatId, '目前還沒有成績');
      return;
    }

    const sorted = [...scores.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    let text = '🏆 排行榜\n\n';

    sorted.forEach(([addr, score], i) => {
      const short = String(addr).slice(0, 6);
      text += `${i + 1}. ${short}... → ${score}\n`;
    });

    bot.sendMessage(chatId, text);
  });
};
