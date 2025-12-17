import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token,{
  polling: true,
});

bot.on("message",async(msg) =>{
  console.log(msg);
});
// const chat_id = msg.chat.id;
// const user_id = msg.from.id;
// const ChatMember = await bot.getChatMember(chat_id,user_id);
// console.log(ChatMember.status);
// // if(ChatMember.status === "administrator" ||
//    ChatMember.status === "creator"
//   ) {
//   bot.sendMessage(chat_id,"你有權利設置機器人");
// }
// });