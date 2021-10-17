import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {DiscordService} from "./discord.service";

function Error(mes){
    this.err = true;
    this.mes = mes;
}

@Controller('/api/discord')
export class DiscordController {

    constructor ( private discordService: DiscordService ) {}

    @Post('/send')
    async sendRequest(@Req() req,
                      @Res() res,
                      @Body('endpoint') endpoint,
                      @Body('token') token,
                      @Body('body') body,
                      @Body('method') method){

        if (!endpoint || !token || !body || !method){
            res.send(new Error('Request must include "endpoint", "token", "body", "method"'));
            return
        }

        res.send(await this.discordService.sendRequest(endpoint, body, method, token) ? {err: false} : new Error('Something error :('))

    }

}
