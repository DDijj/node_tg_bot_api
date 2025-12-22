export const mainKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: '📊狀態', callback_data: 'STATUS' }],
      [{ text: '⚙設置', callback_data: 'SETTINGS' }],
      [{ text: '❓幫助', callback_data: 'HELP' }]
      [{ text: '🔗訪問網站', url: 'https://DDijj.github.io' }],
      [{ text: '📁匯出 Excel', callback_data: 'EXPORT_EXCEL' }]
    ]
  }
};