import { Context } from "telegraf";
import { wait } from "../utils/wait.js";

export const randomPapoco = async (ctx: Context) => {
    const messagesNumber = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < messagesNumber; i++) {
        const papocoNumber = Math.floor(Math.random() * 15);
        await wait(Math.floor(Math.random() * 1000));
        ctx.reply(('Pa ' + 'pa '.repeat(papocoNumber)).trim());
    }

    await wait(Math.floor(Math.random() * 5000));
    ctx.reply('POW!');
}
