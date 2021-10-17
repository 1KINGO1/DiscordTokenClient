import { DiscordService } from "./discord.service";
export declare class DiscordController {
    private discordService;
    constructor(discordService: DiscordService);
    sendRequest(req: any, res: any, endpoint: any, token: any, body: any, method: any): any;
}
