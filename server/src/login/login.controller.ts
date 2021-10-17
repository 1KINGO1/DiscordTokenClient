import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {LoginService} from "./login.service";

function Error(mes){
    this.err = true;
    this.mes = mes;
}

@Controller('/api/login')
export class LoginController {

    constructor (private loginService: LoginService) {}

    @Post('/')
    async login(@Req() req,
                @Res() res,
                @Body('token') token){

        if (!token){
            res.send(new Error("Request must have \"token\" parameter"));
            return
        }

        res.send(await this.loginService.checkToken(token) ? {err: false} : new Error("Invalid token"))

    }

}
