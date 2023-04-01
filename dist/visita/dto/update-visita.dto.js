"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_visita_dto_1 = require("./create-visita.dto");
class UpdateVisitaDto extends (0, swagger_1.PartialType)(create_visita_dto_1.CreateVisitaDto) {
}
exports.UpdateVisitaDto = UpdateVisitaDto;
//# sourceMappingURL=update-visita.dto.js.map