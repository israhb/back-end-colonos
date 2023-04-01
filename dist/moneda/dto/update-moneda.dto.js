"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonedaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_moneda_dto_1 = require("./create-moneda.dto");
class UpdateMonedaDto extends (0, swagger_1.PartialType)(create_moneda_dto_1.CreateMonedaDto) {
}
exports.UpdateMonedaDto = UpdateMonedaDto;
//# sourceMappingURL=update-moneda.dto.js.map