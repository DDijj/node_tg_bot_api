import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';
import fs from 'fs/promises';
import startCmd from './commands/start.js';
import helpCmd from './commands/help.js';

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });


const STATE_FILE = 'data/state.json';

async function loadState() {
  return JSON.parse(await fs.readFile(STATE_FILE, 'utf8'));
}

async function saveState(state) {
  await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2));
}
startCmd(bot);
helpCmd(bot);