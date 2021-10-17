import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class DiscordService {

    async sendRequest(endpoint: string,
                      body: string,
                      method: string,
                      token: string){


        let result = false;
        try{
            let {data} = await axios[method](endpoint.startsWith('/') ? `https://discord.com/api/v9${endpoint}` : `https://discord.com/api/v9/${endpoint}`,
                JSON.parse(body)
                , {
                headers: {
                    authorization: token
                }
            });
            result = true
        }
        catch (e){
            result = false;
        }

        return result
    }

}
