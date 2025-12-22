import 'dotenv/config';
import createBot from './bot.js';

import './server.js';
import startCommand from './commands/start.js';
import helpCommand from './commands/help.js';
import keyboardCommand from './commands/keyboard.js';
import messages from './commands/messages.js';

const bot = createBot(process.env.BOT_TOKEN);

startCommand(bot);
helpCommand(bot);
keyboardCommand(bot);
messages(bot);

console.log('🤖 Telegram Bot polling started');