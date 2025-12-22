import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export function geerateExcel() {
  // 1  假資料(陣列裡面放物件)
  const data = [
    { 名稱: '使用者A', 狀態: '正常', 時間: new Date().toLocaleString() },


    { 名稱: '使用者B', 狀態: '停用', 時間: new Date().toLocaleString() },
  ];

  // 2  轉成工作表
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 3  建立新的工作簿
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '報表');

  // 4  確保 tmp 目錄存在
  const dir = path.resolve('tmp');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // 5  將工作簿寫入檔案
  const filePath = path.join(dir, 'report.xlsx');
  XLSX.writeFile(workbook, filePath);

  return filePath;
}