import { createBot } from './bot.js';
import { startServer } from './server.js';
import { registerCommands } from './handlers/commands.js';
import { registerKeyboards } from './handlers/keyboards.js';

const bot = createBot();

registerCommands(bot);
registerKeyboards(bot);

startServer(bot);

console.log('✅ Bot + Web UI ready');