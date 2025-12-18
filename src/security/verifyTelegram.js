import crypto from "crypto";

export function verifyTelegram(initData) {
    const BOT_TOKEN = process.env.BOT_TOKEN;

    const secret = crypto
        .createHmac("sha256", "WebAppData")
        .update(BOT_TOKEN)
        .digest();

    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    params.delete("hash");

    const data = [...params.entries()]
        .sort()
        .map(([k, v]) => `${k}=${v}`)
        .join("\n");

    const hmac = crypto
        .createHmac("sha256", secret)
        .update(data)
        .digest("hex");

    return hmac === hash;
}