import { registerAdmin } from '../keyboards/admin.js';

export function registerKeyboards(bot) {
  // register admin text handlers (was previously using global `bot`)
  registerAdmin(bot);

  bot.on('callback_query', async (query) => {
    try {
      const chatId = query.message.chat.id;
      switch (query.data) {
        case 'invite':
          await bot.sendMessage(chatId, '請把我邀請進你的頻道或群組');
          break;
        case 'list':
          await bot.sendMessage(chatId, '這裡會列出你的頻道與群');
          break;
        case 'upload':
          await bot.sendMessage(chatId, '請上傳你的私有資源');
          break;
        case 'ads_bottom':
          await bot.sendMessage(chatId, '底部輪播廣告設定');
          break;
        case 'ads_schedule':
          await bot.sendMessage(chatId, '定時推送廣告設定');
          break;
        default:
          break;
      }
      await bot.answerCallbackQuery(query.id);
    } catch (err) {
      console.error('callback_query handler error', err);
    }
  });
}
