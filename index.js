import express from "express";
import { Telegraf } from "telegraf";
import dotEnv from "dotenv";
import { randomCorintiano } from "./commands/corintiano.js";
import { randomCat } from "./commands/cat.js";
import { randomPapoco } from "./commands/papoco.js";
import { randomDog } from "./commands/dog.js";

dotEnv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const app = express();
const port = process.env.PORT || '3000'

app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN }));

bot.start((ctx) => ctx.reply('Welcome'));

bot.command('acende', randomPapoco);
bot.command('corintiano', randomCorintiano);
bot.command('cat', randomCat);
bot.command('dog', randomDog);

bot.launch();

app.listen(port, () => console.log("Listening on port", port));
