import express from "express";
import bot from "./bot.js";

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const { chatId, text } = req.body;
  await bot.sendMessage(chatId, text);
  res.json({ ok: true });
});

export default app;