import express from "express";
import { Telegraf } from "telegraf";
import dotEnv from "dotenv";
import { randomCorintiano } from "./commands/corintiano.js";
import { randomCat } from "./commands/cat.js";
import { randomPapoco } from "./commands/papoco.js";
import { randomDog } from "./commands/dog.js";
import { randomTaylorSticker } from "./commands/taylor.js";
import { randomImage } from "./commands/image.js";
import { fale } from "./commands/fale.js";

dotEnv.config();

const init = async () => {
    if (!process.env.TELEGRAM_TOKEN) {
        throw new Error("Bot token not found");
    }

    if (!process.env.WEBHOOK_DOMAIN) {
        throw new Error("Webhook domain not found");
    }

    const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
    const app = express();
    const port = process.env.PORT || '3000'

    app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN }));

    bot.start((ctx) => ctx.reply('Welcome'));

    bot.command('acende', randomPapoco);
    bot.command('corintiano', randomCorintiano);
    bot.command('cat', randomCat);
    bot.command('dog', randomDog);
    bot.command('taylor', randomTaylorSticker);
    bot.command('ordinal', (ctx) => ctx.reply('°'));
    bot.command('image', randomImage);
    bot.command('fale', fale);

    bot.launch();

    app.listen(port, () => console.log("Listening on port", port));
}

init();
