import axios from "axios"

export const randomDog = async (ctx) => {
    const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
    ctx.replyWithPhoto(data.message);
};
