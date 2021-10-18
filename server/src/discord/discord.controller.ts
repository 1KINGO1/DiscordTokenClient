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

        if (!endpoint){
            res.send(new Error('Request must include correct "endpoint"'));
            return
        }
        if (body){
            try{
                JSON.parse(body);
            }
            catch (e){
                res.send(new Error('Request must include correct "body" in JSON format'));
                return
            }
        }
        if (method !== "post" &&
            method !== "get"  &&
            method !== "patch"&&
            method !== "put"  &&
            method !== "delete"
        ){
            res.send(new Error('Request must include correct "method"'));
            return
        }
        let resp = await this.discordService.sendRequest(endpoint, body, method, token);
        res.send(resp ? {err: false, res: resp} : new Error('Something error :('))

    }

}
