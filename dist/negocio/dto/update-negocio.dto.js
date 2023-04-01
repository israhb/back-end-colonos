"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNegocioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_negocio_dto_1 = require("./create-negocio.dto");
class UpdateNegocioDto extends (0, swagger_1.PartialType)(create_negocio_dto_1.CreateNegocioDto) {
}
exports.UpdateNegocioDto = UpdateNegocioDto;
//# sourceMappingURL=update-negocio.dto.js.map