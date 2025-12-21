import start from '../commands/start.js';
import help from '../commands/help.js';
import rank from '../commands/rank.js';

export function registerCommands(bot) {
  if (typeof start === 'function') start(bot);
  if (typeof help === 'function') help(bot);
  if (typeof rank === 'function') rank(bot);
}
