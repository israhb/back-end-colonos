"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceGeneralService = void 0;
const common_1 = require("@nestjs/common");
let ServiceGeneralService = class ServiceGeneralService {
    getDateNowAMD() {
        const u = new Date();
        return `${u.getUTCFullYear()}-${('0' + (u.getUTCMonth() + 1)).slice(-2)}-${('0' + u.getUTCDate()).slice(-2)}`;
    }
    getHourNow() {
        const u = new Date();
        const minutes = u.getMinutes() < 10 ? '0' + u.getMinutes() : u.getMinutes();
        const hours = u.getHours() < 10 ? '0' + u.getHours() : u.getHours();
        return `${hours}:${minutes}:00`;
    }
};
ServiceGeneralService = __decorate([
    (0, common_1.Injectable)()
], ServiceGeneralService);
exports.ServiceGeneralService = ServiceGeneralService;
//# sourceMappingURL=service-general.service.js.map