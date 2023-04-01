"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComunicadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comunicado_dto_1 = require("./create-comunicado.dto");
class UpdateComunicadoDto extends (0, swagger_1.PartialType)(create_comunicado_dto_1.CreateComunicadoDto) {
}
exports.UpdateComunicadoDto = UpdateComunicadoDto;
//# sourceMappingURL=update-comunicado.dto.js.map