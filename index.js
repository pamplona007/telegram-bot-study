import express from "express";
import { Telegraf } from "telegraf";
import dotEnv from "dotenv";

dotEnv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const app = express();
const port = process.env.PORT || '3000'

app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN }));

bot.on("text", ctx => ctx.reply("Hello"));

app.listen(port, () => console.log("Listening on port", port));
