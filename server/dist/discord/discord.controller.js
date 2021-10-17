"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordController = void 0;
const common_1 = require("@nestjs/common");
const discord_service_1 = require("./discord.service");
function Error(mes) {
    this.err = true;
    this.mes = mes;
}
let DiscordController = class DiscordController {
    constructor(discordService) {
        this.discordService = discordService;
    }
    async sendRequest(req, res, endpoint, token, body, method) {
        if (!endpoint || !token || !body || !method) {
            res.send(new Error('Request must include "endpoint", "token", "body", "method"'));
            return;
        }
        res.send(await this.discordService.sendRequest(endpoint, body, method, token) ? { err: false } : new Error('Something error :('));
    }
};
__decorate([
    (0, common_1.Post)('/send'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)('endpoint')),
    __param(3, (0, common_1.Body)('token')),
    __param(4, (0, common_1.Body)('body')),
    __param(5, (0, common_1.Body)('method')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DiscordController.prototype, "sendRequest", null);
DiscordController = __decorate([
    (0, common_1.Controller)('/api/discord'),
    __metadata("design:paramtypes", [discord_service_1.DiscordService])
], DiscordController);
exports.DiscordController = DiscordController;
//# sourceMappingURL=discord.controller.js.map