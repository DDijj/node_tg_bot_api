import express from "express";
import bot from "../bots/botA.js";
import path from "path";

const app = express();
app.use(express.json());

// Telegram webhook
app.post("/bot", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// WebApp 頁面
app.get("/mini", (req, res) => {
  res.sendFile(path.resolve("mini-app/mini.html"));
});

export default app;