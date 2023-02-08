import express from "express";
import { Telegraf } from "telegraf";
import dotEnv from "dotenv";
import { randomCorintiano } from "./commands/corintiano";
import { randomCat } from "./commands/cat";
import { randomPapoco } from "./commands/papoco";

dotEnv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const app = express();
const port = process.env.PORT || '3000'

app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN }));

bot.start((ctx) => ctx.reply('Welcome'));

bot.command('acende', randomPapoco);
bot.command('corintiano', randomCorintiano);
bot.command('cat', randomCat);

bot.launch();

app.listen(port, () => console.log("Listening on port", port));
