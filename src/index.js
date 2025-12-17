import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';
import fs from 'fs/promises';
import startCmd from './commands/start.js';
import helpCmd from './commands/help.js';

const BOT_MODE = process.env.BOT_MODE || 'polling';

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: process.env.BOT_MODE === 'polling'
});

const STATE_FILE = 'data/state.json';

// 測試用，顯示目前的 BOT_MODE
console.log('Bot mode:', BOT_MODE);

async function loadState() {
  return JSON.parse(await fs.readFile(STATE_FILE, 'utf8'));
}

async function saveState(state) {
  await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2));
}

//  用法範例(紀錄用戶)
// bot.on('message', async (msg) => {
//   const state = await loadState();
//   state[msg.from.id] = { lastSeen: Date.now() };
//   await saveState(state);
// });
startCmd(bot);
helpCmd(bot);