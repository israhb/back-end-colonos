import { FolioService } from './folio.service';
import { CreateFolioDto } from './dto/create-folio.dto';
import { UpdateFolioDto } from './dto/update-folio.dto';
import { Folio } from './entities/folio.entity';
export declare class FolioController {
    private folioService;
    constructor(folioService: FolioService);
    create(createFolioDto: CreateFolioDto): Promise<Folio | import("@nestjs/common").NotFoundException>;
    findAll(): Promise<Folio[]>;
    findNotRegister(): Promise<Folio[]>;
    findOneName(name: string): Promise<Folio>;
    findOne(id: number): Promise<Folio>;
    update(id: number, updateFolioDto: UpdateFolioDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").NotFoundException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").NotFoundException>;
}
