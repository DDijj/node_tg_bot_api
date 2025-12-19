import 'dotenv/config';
import { createBot } from './bot.js';
import { startServer } from './server.js';
import { registerCommands } from './handlers/commands.js';
import { registerKeyboards } from './handlers/keyboards.js';

const bot = createBot(); // ✅ 全專案只此一行

registerCommands(bot);
registerKeyboards(bot);

startServer(bot);

console.log('✅ Bot + Web UI ready');
