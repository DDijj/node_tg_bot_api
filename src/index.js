import { createBot } from './bot.js';
import { registerCommands } from './handlers/commands.js';
import { registerKeyboards } from './handlers/Keyboards.js';
import { registerMessages } from './handlers/messages.js';
const bot = createBot();

registerCommands(bot);
registerKeyboards(bot);
registerMessages(bot);

console.log('✅ Bot is running');
console.log('🚀 index.js fully loaded');