export function registerHandlers(bot) {
  bot.on("message", async (msg) => {
    console.log(msg);
  });

  bot.on('callback_query', async (q) => {
    console.log(q);
  });
}