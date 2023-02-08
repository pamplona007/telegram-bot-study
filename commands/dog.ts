import axios from "axios"
import { Context } from "telegraf";

export const randomDog = async (ctx: Context) => {
    const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
    ctx.replyWithPhoto(data.message);
};
