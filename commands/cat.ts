import axios from "axios";
import { Context } from "telegraf";

export const randomCat = async (ctx: Context) => {
    const { data } = await axios.get('https://aws.random.cat/meow');

    await ctx.sendPhoto(data.file);
};
