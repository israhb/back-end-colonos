import { LoginCountService } from './login_count.service';
import { CreateLoginCountDto } from './dto/create-login_count.dto';
import { UpdateLoginCountDto } from './dto/update-login_count.dto';
import { LoginCount } from './entities/login_count.entity';
export declare class LoginCountController {
    private loginCountService;
    constructor(loginCountService: LoginCountService);
    create(createLoginCountDto: CreateLoginCountDto): Promise<LoginCount>;
    findAll(): Promise<LoginCount[]>;
    findFolioMac(body: any): Promise<false | LoginCount>;
    findFolios(body: any): Promise<LoginCount[]>;
    findOneFolioMac(id: number): Promise<import("@nestjs/common").HttpException | LoginCount>;
    update(id: number, updateLoginCountDto: UpdateLoginCountDto): Promise<import("typeorm").UpdateResult | import("@nestjs/common").HttpException>;
    remove(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
}
