import { HttpException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level } from './entities/level.entity';
import { Repository } from 'typeorm';
export declare class LevelService {
    private levelRepository;
    constructor(levelRepository: Repository<Level>);
    create(createLevelDto: CreateLevelDto): Promise<Level | HttpException>;
    findAll(): Promise<Level[]>;
    findOne(id: number): Promise<Level | HttpException>;
    update(id: number, updateLevelDto: UpdateLevelDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<import("typeorm").UpdateResult | HttpException>;
}
