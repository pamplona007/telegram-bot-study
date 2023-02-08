import axios from "axios";

export const randomCat = async (ctx) => {
    const { data } = await axios.get('https://aws.random.cat/meow');

    await ctx.replyWithPhoto(data.file);
};
