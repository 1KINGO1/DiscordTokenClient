import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class LoginService {

    async checkToken(token: string){
        let result = false;
        try{
            await axios.patch(`https://discord.com/api/v9/users/@me/settings`, {
                client_status:{
                    mobile: "online"
                }
            }, {headers: {
                    authorization: token
                }})
            result = true
        }
        catch (e){
            result = false;
        }
        return result;
    }

}
