module.exports = {
  apps: [
    {
      name: 'telegram-bot',
      script: 'src/index.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        BOT_TOKEN: '8504911720:AAEyelR4ceB0GiOmyluakXZ67-6oAjrgPLc',
      },
    },
  ],
};
