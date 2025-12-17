import TelegramBot from "node-telegram-bot-api";

const token = "8250570082:8250570082:AAGUXitbkseOu9M9cfLNdell5MUBy5JUSP0";

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