import { CommandFunction } from "../types/index.js";
import { wait } from "../utils/wait.js";

export const randomPapoco: CommandFunction = async (ctx) => {
    const count = Number(ctx.message?.text?.split(' ')[1]);

    const messagesNumber = count || Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < messagesNumber; i++) {
        const papocoNumber = Math.floor(Math.random() * 15);
        await wait(Math.floor(Math.random() * 500) + 500);
        ctx.reply(('Pa ' + 'pa '.repeat(papocoNumber)).trim());
    }

    await wait(Math.floor(Math.random() * 5000));
    ctx.reply('POW!');
}
