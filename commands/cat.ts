import axios from "axios";
import { Context } from "telegraf";

export const randomCat = async (ctx: Context) => {
    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?size=full', {
        headers: {
            'x-api-key': process.env.CAT_API_KEY
        }
    });

    await ctx.replyWithPhoto(data[0].url);
};
