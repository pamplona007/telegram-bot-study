import { Context, Middleware, NarrowedContext } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram.js";

export type CommandFunction = Middleware<NarrowedContext<Context<Update>, {
    message: Update.New & Update.NonChannel & Message.TextMessage;
    update_id: number;
}>>