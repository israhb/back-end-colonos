"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCountModule = void 0;
const common_1 = require("@nestjs/common");
const login_count_service_1 = require("./login_count.service");
const login_count_controller_1 = require("./login_count.controller");
const typeorm_1 = require("@nestjs/typeorm");
const login_count_entity_1 = require("./entities/login_count.entity");
let LoginCountModule = class LoginCountModule {
};
LoginCountModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([login_count_entity_1.LoginCount])
        ],
        controllers: [login_count_controller_1.LoginCountController],
        providers: [login_count_service_1.LoginCountService],
        exports: [login_count_service_1.LoginCountService]
    })
], LoginCountModule);
exports.LoginCountModule = LoginCountModule;
//# sourceMappingURL=login_count.module.js.map