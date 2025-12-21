# 會把 removeAllListeners 插入到 createBot() 後註冊前
python3 - << 'PY'
from pathlib import Path
p=Path('src/index.js')
s = p.read_text()
needle = "const bot = createBot();"
if needle in s and "removeAllListeners" not in s:
s = s.replace(needle, needle + "\n\n// 移除舊 listeners，避免重複註冊\nbot.removeAllListeners('text');\nbot.removeAllListeners('message');\nbot.removeAllListeners('callback_query');\n")
p.write_text(s)
print('src/index.js updated')
else:
print('src/index.js unchanged or already patched')
PY