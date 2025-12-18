import XLSX from "xlsx";
import fs from "fs";

export function exportChatsToExcel(chats) {
    const ws = XLSX.utils.json_to_sheet(chats);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Chats");
    XLSX.writeFile(wb, "chats.xlsx");
}