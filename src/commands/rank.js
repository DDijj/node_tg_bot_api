bot.onText(/\/rank/, (msg) => {
  if (scores.size === 0) {
    bot.sendMessage(msg.chat.id, '目前還沒有成績');
    return;
  }

  const sorted = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  let text = '🏆 排行榜\n\n';

  sorted.forEach(([addr, score], i) => {
    text += `${i + 1}. ${addr.slice(0, 6)}... → ${score}\n`;
  });

  bot.sendMessage(msg.chat.id, text);
});
