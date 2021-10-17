import { LoginService } from "./login.service";
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    login(req: any, res: any, token: any): any;
}
