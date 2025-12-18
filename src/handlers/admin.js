export function handleAdminCallback(bot, query) {
  const chatId = query.message.chat.id;

  switch (query.data) {
    case "announce":
      bot.sendMessage(chatId, "請輸入公告內容");
      break;

    case "export_excel":
      bot.sendMessage(chatId, "Excel 匯出中...");
      break;
  }

  bot.answerCallbackQuery(query.id);
}