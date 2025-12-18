export const tonConnect = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: 'https://sariah-superintolerable-bart.ngrok-free.dev/tonconnect-manifest.json'
});

export function initWallet() {
  tonConnect.onStatusChange(wallet => {
    if (wallet) {
      console.log('錢包已連接:', wallet.account.address);
    }
  });
}

export async function pay() {
  return tonConnect.sendTransaction({
    validUntil: Math.floor(Date.now() / 1000) + 300,
    messages: [{
      address: 'UQByBPvOvc4RldwgRyGtslx69sZYqWY0V-h-4cY-GCJgU9oe',
      amount: '100000000' // 0.1 TON
    }]
  });
}
