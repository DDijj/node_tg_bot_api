import axios from 'axios';

app.post('/api/payment/confirm', express.json(), async (req, res) => {
  try {
    const { boc, userId } = req.body;

    if (!boc || !userId) {
      return res.status(400).json({ error: 'missing data' });
    }

    // 使用 TonCenter API（主網）
    const TON_API = 'https://toncenter.com/api/v2/sendBoc';
    const TON_API_KEY = process.env.TONCENTER_API_KEY;

    // 將交易送到區塊鏈
    const sendResult = await axios.post(
      TON_API,
      { boc },
      {
        headers: {
          'X-API-Key': TON_API_KEY
        }
      }
    );

    const txHash = sendResult.data.result?.hash;

    if (!txHash) {
      return res.status(400).json({ error: 'transaction failed' });
    }

    console.log('✅ 交易已送出', txHash, 'user:', userId);

    // TODO：之後可以存 DB
    // TODO：之後可以標記 user 已付款

    res.json({ ok: true, txHash });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'verification error' });
  }
});
