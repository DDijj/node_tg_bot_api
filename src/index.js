console.log('🔥 BOT ENTRY LOADED');
import 'dotenv/config';
import { createBot } from './bots/bot.js';
import { registerHandlers } from './bots/handlers.js';
import { createServer } from './api/server.js';

console.log('🔥 BOT ENTRY LOADED');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('❌ BOT_TOKEN not found in .env');
  process.exit(1);
}

const bot = createBot(token);
registerHandlers(bot);
createServer();

console.log('✅ Bot started');