import fetch from 'node-fetch';

const TON_API = 'https://toncenter.com/api/v2';

export async function verifyTonTransaction(boc) {
  // 1️⃣ decode boc
  const decodeRes = await fetch(`${TON_API}/decodeMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ boc })
  }).then(r => r.json());

  if (!decodeRes.ok) return false;

  const msg = decodeRes.result;

  // 2️⃣ 驗證收款地址
  if (msg.destination !== 'UQByBPvOvc4RldwgRyGtslx69sZYqWY0V-h-4cY-GCJgU9oe') {
    return false;
  }

  // 3️⃣ 驗證金額
  if (msg.value !== '100000000') {
    return false;
  }

  return true;
}
