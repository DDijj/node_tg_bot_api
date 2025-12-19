import { pay } from './wallet.js';

const tg = window.Telegram.WebApp;
const userId = tg.initDataUnsafe.user.id;

document.getElementById('pay').onclick = async () => {
  try {
    await pay(userId);
    alert('交易已送出，驗證中...');
  } catch (e) {
    alert('付款失敗或取消');
  }
};
