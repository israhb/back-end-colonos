import { HttpException } from '@nestjs/common';
import { CreateLoginCountDto } from './dto/create-login_count.dto';
import { UpdateLoginCountDto } from './dto/update-login_count.dto';
import { LoginCount } from './entities/login_count.entity';
import { Repository } from 'typeorm';
export declare class LoginCountService {
    private loginCountRepository;
    constructor(loginCountRepository: Repository<LoginCount>);
    create(createLoginCountDto: CreateLoginCountDto): Promise<LoginCount>;
    findAll(): Promise<LoginCount[]>;
    findAllFolioMac(body: any): Promise<false | LoginCount>;
    findAllFolio(body: any): Promise<LoginCount[]>;
    findOne(id: number): Promise<HttpException | LoginCount>;
    update(id: number, updateLoginCountDto: UpdateLoginCountDto): Promise<import("typeorm").UpdateResult | HttpException>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
}
