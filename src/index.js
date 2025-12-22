import { fileURLToPath } from 'url';
import { createBot } from './bot.js';
import { startServer } from './api/server.js';
import { registerCommands } from './handlers/commands.js';
import { registerKeyboards } from './handlers/keyboards.js';
import { registerMessages } from './handlers/messages.js';

const __filename = fileURLToPath(import.meta.url);

const bot = createBot();

// 移除舊 listeners，避免重複註冊
bot.removeAllListeners('text');
bot.removeAllListeners('message');
bot.removeAllListeners('callback_query');

registerCommands(bot);
registerKeyboards(bot);
registerMessages(bot);

startServer(bot);

console.log('✅ Bot + Web UI ready', __filename);

bot.on('polling_error', (err) => {
  console.error('❌ polling_error message:', err && err.message);
  console.error('❌ polling_error stack:', err && err.stack);
  console.error('❌ polling_error name:', err && err.name);
  console.error('❌ polling_error cause:', err && err.cause);
  console.error('❌ polling_error error:', err && err.error);
  console.error('❌ polling_error statusCode:', err && err.statusCode);
  console.error('❌ polling_error options:', err && err.options);
});

bot.on('error', (err) => {
  console.error('❌ bot error:', err && err.stack ? err.stack : err);
});