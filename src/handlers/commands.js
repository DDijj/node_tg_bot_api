import start from '../commands/start.js';
import help from '../commands/help.js';
import rank from '../commands/rank.js';

export function registerCommands(bot) {
  try {
    if (typeof start === 'function') start(bot);
  } catch (err) {
    console.error('registerCommands: start error', err && err.stack ? err.stack : err);
  }

  try {
    if (typeof help === 'function') help(bot);
  } catch (err) {
    console.error('registerCommands: help error', err && err.stack ? err.stack : err);
  }

  try {
    if (typeof rank === 'function') rank(bot);
  } catch (err) {
    console.error('registerCommands: rank error', err && err.stack ? err.stack : err);
  }
}

export default registerCommands;
