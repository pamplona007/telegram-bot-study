import axios from "axios";

export const taylor = async (ctx) => {
    const { data } = await axios.get('https://api.pexels.com/v1/search?query=taylor%20swift&per_page=50', {
        headers: {
            Authorization: process.env.PEXELS_API_KEY
        },
    });

    const imageUrl = data.photos[Math.floor(Math.random() * data.photos.length)].src.original;
    ctx.replyWithPhoto(imageUrl);
}