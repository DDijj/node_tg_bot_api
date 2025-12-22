import { mainKeyboard } from '../keyboards/mainKeyboard.js';
import { geerateExcel } from '../services/excel.js';

export function registerHandlers(bot) {
  bot.on('message', async (msg) => {
    if (msg.text === '/start') {
      bot.sendMessage(
        msg.chat.id,
        '選一個功能',
        mainKeyboard
      );
    }
  });

  bot.on('callback_query', async (q) => {
    const chatId = q.message.chat.id;

    switch (q.data) {
      case 'STATUS':
        await bot.sendMessage(chatId, '正常狀態運作中');
        break;
      case 'EXPORT_EXCEL':
        try {
          const filePath = geerateExcel();
          await bot.sendDocument(chatId, filePath);
        } catch (error) {
          console.error('生成 Excel 文件時出錯:', error);
          await bot.sendMessage(chatId, '生成 Excel 文件時出錯');
        }
      case 'SETTINGS':
        await bot.sendMessage(chatId, '這是設置');
        break;
      case 'HELP':
        await bot.sendMessage(chatId, '這是幫助');
        break;
      default:
        await bot.sendMessage(chatId, '未知的選項');
    }
  }
  );
}