import axios from "axios";
import { CommandFunction } from "../types";

export const randomImage: CommandFunction = async (ctx) => {
    const query = ctx.message?.text?.split(' ')[1];
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

    const response = await axios.get(url);

    const image = response.data.urls.regular;

    ctx.replyWithPhoto(image);
}