"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFolioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_folio_dto_1 = require("./create-folio.dto");
class UpdateFolioDto extends (0, swagger_1.PartialType)(create_folio_dto_1.CreateFolioDto) {
}
exports.UpdateFolioDto = UpdateFolioDto;
//# sourceMappingURL=update-folio.dto.js.map