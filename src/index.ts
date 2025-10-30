import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN as string;
if (!token) {
  console.error("Добавь TOKEN в .env файл");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет! Я помогу при панической атаке.", {
    reply_markup: {
      keyboard: [
        [{ text: "Помощь" }],
        [{ text: "Определить геопозицию" }]
      ],
      resize_keyboard: true
    }
  });
});

bot.on('message', (msg) => {
  const text = msg.text;

  if (text === "Помощь") {
    bot.sendMessage(msg.chat.id, "Если паническая атака, глубоко дышите и постарайтесь успокоиться. Телефон для связи: @MSL72Rph");
  }

  if (text === "Определить геопозицию") {
    bot.sendMessage(msg.chat.id, "Отправь свою локацию через Telegram.");
  }
});
