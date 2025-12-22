export default {
  apps: [
    {
      name: "telegram-bot",
      script: "src/index.js",
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }]
};