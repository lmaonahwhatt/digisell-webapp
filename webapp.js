// DigiSell Bot — БЕЗ ЛЮБОЙ КНОПКИ МЕНЮ
const TelegramBot = require("node-telegram-bot-api");

const token = "7966028229:AAFv2lcUQrX3oKFdKVcZutXx-TSfNz0uGtU";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🛒 Открыть магазин DigiSell",
            web_app: {
              url: "https://digisell-bot.vercel.app/app.html",
            },
          },
        ],
        [
          {
            text: "Канал DigiSell",
            url: "https://t.me/digiselloff",
          },
          {
            text: "Связь с поддержкой",
            url: "https://t.me/digisell_support",
          },
          {
            text: "Отзывы клиентов",
            url: "https://t.me/digisellreviews",
          },
        ],
      ],
    },
  };

  bot.sendMessage(
    chatId,
    `
<b>Здравствуйте, ${userName}!</b>

<b>🎮DigiSell</b> — твой надёжный сервис цифровых товаров с быстрым оформлением. Здесь ты найдёшь популярные игры Steam и подписки на сервисы вроде Spotify, YouTube, Telegram или Chat GPT — всё по выгодным ценам для РФ-региона.

Для просмотра каталога и оформления заказа нажмите «Открыть магазин DigiSell».`,
    {
      parse_mode: "HTML",
      reply_markup: { remove_keyboard: true }, // Удаляем все кнопки меню
      ...keyboard,
    },
  );
});

console.log("DigiSell Bot запущен");
