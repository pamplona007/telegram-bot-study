import { Context } from "telegraf";

const corintianoStickers = [
    "CAACAgEAAxkBAAEHo6lj47eIMF912d0ZEqHphyIm0jTPWAACQQAD6jaLOyHZiXNnnjSILgQ",
    "CAACAgEAAxkBAAEHo6tj47ePC-ZBz3L2KgmMZ7aBqUUK8gACAgAD6jaLOyQT0KkAAWDMIy4E",
    "CAACAgEAAxkBAAEHo7Vj47jFkurYSTp9uWM87OXB3PRapQACQAAD6jaLO8lkQjB1XyH8LgQ",
    "CAACAgEAAxkBAAEHo7Nj47i4UTzlVpTsg2E2lTX7u1FxKQACAQAD6jaLO0NRW2ZPOgSLLgQ",
    "CAACAgEAAxkBAAEHo7Fj47ixpsBCmuUYo9kTvCUXQ-kanwACPwAD6jaLO9ZYAY2csL9hLgQ"
]

export const randomCorintiano = (ctx: Context) => {
    const sticker = corintianoStickers[Math.floor(Math.random() * corintianoStickers.length)];
    ctx.sendSticker(sticker);
};
