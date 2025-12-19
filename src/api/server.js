import express from 'express';
import { verifyTonTransaction } from './verifyTon.js';
import fs from 'fs';
import path from 'path';

const statePath = path.resolve('data/state.json');

export function startServer(bot) {
  const app = express();
  app.use(express.json());

  app.post('/api/payment/confirm', async (req, res) => {
    try {
      const { txHash, userId } = req.body;

      const ok = await verifyTonTransaction(txHash);
      if (!ok) {
        return res.status(400).json({ ok: false });
      }

      const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
      state[userId] = { paid: true };
      fs.writeFileSync(statePath, JSON.stringify(state, null, 2));

      bot.sendMessage(userId, '✅ 付款成功，遊戲已解鎖');

      res.json({ ok: true, unlocked: true });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'verification failed' });
    }
  });

  app.use(express.static('mini-app'));

  app.listen(3000, () => {
    console.log('🌐 Web API running on port 3000');
  });
}
