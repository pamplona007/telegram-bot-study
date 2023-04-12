import { getAudioUrl } from "google-tts-api";
import { CommandFunction } from "../types";

export const fale: CommandFunction = async (ctx) => {
    const message = ctx.message?.text?.split(' ').slice(1).join(' ');

    if (!message) {
        ctx.reply('Você precisa passar uma mensagem para eu falar');
        return;
    }

    const url = getAudioUrl(message, {
        lang: 'pt-BR',
        slow: false,
        host: 'https://translate.google.com',
    });

    ctx.replyWithVoice({ url });
}