"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let LoginService = class LoginService {
    async checkToken(token) {
        let result = false;
        try {
            await axios_1.default.patch(`https://discord.com/api/v9/users/@me/settings`, {
                client_status: {
                    mobile: "online"
                }
            }, { headers: {
                    authorization: token
                } });
            result = true;
        }
        catch (e) {
            result = false;
        }
        return result;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map