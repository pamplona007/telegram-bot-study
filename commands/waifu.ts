import axios from "axios";
import { Context, Middleware, MiddlewareFn, NarrowedContext } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram";

export const waifu: Middleware<NarrowedContext<Context<Update>, {
    message: Update.New & Update.NonChannel & Message.TextMessage;
    update_id: number;
}>> = async (ctx) => {
    // get random waifu from ttps://api.waifu.pics/sfw/waifu
    // if the user sends the nsft tag, send a nsfw waifu
    const [command, ...args] = ctx.update.message.text.split(" ");

    if (args.length > 0 && args[0] === "nsfw") {
        const { data: { url } } = await axios.get("https://api.waifu.pics/nsfw/waifu");
        ctx.replyWithPhoto(url, {
            has_spoiler: true,
        });
        return;
    }

    const { data: { url } } = await axios.get("https://api.waifu.pics/sfw/waifu");
    ctx.replyWithPhoto(url);
}
