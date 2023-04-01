import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level } from './entities/level.entity';
export declare class LevelController {
    private levelService;
    constructor(levelService: LevelService);
    create(createLevelDto: CreateLevelDto): Promise<Level | import("@nestjs/common").HttpException>;
    findAll(): Promise<Level[]>;
    findOne(id: number): Promise<Level | import("@nestjs/common").HttpException>;
    update(id: number, updateLevelDto: UpdateLevelDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
}
