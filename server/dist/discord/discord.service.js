"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DiscordService = class DiscordService {
    async sendRequest(endpoint, body, method, token) {
        let result = false;
        try {
            if (method == "get") {
                let { data } = await axios_1.default[method](endpoint.startsWith('/') ? `https://discord.com/api/v9${endpoint}` : `https://discord.com/api/v9/${endpoint}`, {
                    headers: {
                        authorization: token
                    }
                });
                result = data;
            }
            else {
                let { data } = await axios_1.default[method](endpoint.startsWith('/') ? `https://discord.com/api/v9${endpoint}` : `https://discord.com/api/v9/${endpoint}`, JSON.parse(body), {
                    headers: {
                        authorization: token
                    }
                });
                result = data;
            }
        }
        catch (e) {
            result = false;
        }
        return result;
    }
};
DiscordService = __decorate([
    (0, common_1.Injectable)()
], DiscordService);
exports.DiscordService = DiscordService;
//# sourceMappingURL=discord.service.js.map