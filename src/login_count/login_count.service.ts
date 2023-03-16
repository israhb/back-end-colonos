import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLoginCountDto } from './dto/create-login_count.dto';
import { UpdateLoginCountDto } from './dto/update-login_count.dto';
import { LoginCount } from './entities/login_count.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginCountService {

  constructor(
    @InjectRepository(LoginCount) private loginCountRepository: Repository<LoginCount> 
  ){}

  async create(createLoginCountDto: CreateLoginCountDto) {
    const newLoginCount = this.loginCountRepository.create(createLoginCountDto);
    return this.loginCountRepository.save(newLoginCount);
  }

  findAll() {
    return this.loginCountRepository.find();
  }

  async findAllFolioMac(body: any) {
    const loginCountFound = await this.loginCountRepository.findOne({
      where:{
        folio: body.name,
        mac: body.mac
      }
    });
    if(!loginCountFound){
      return false;
    }
    return loginCountFound;
  }
  findAllFolio(body: any) {
    return this.loginCountRepository.find({
      where:{
        folio: body.name
      }
    });
  }
  async findOne(id: number) {
    const loginCountFound = await this.loginCountRepository.findOne({
      where:{
        id
      }
    });
    if(!loginCountFound){
      return new HttpException('Login Count no Existe', HttpStatus.NOT_FOUND);
    }
    return loginCountFound;
  }

  async update(id: number, updateLoginCountDto: UpdateLoginCountDto) {
    const loginCountFound = await this.loginCountRepository.findOne({
      where: {
        id
      }
    });
    if(!loginCountFound){
      return new HttpException('Login Count no Existe', HttpStatus.NOT_FOUND);
    }
    return this.loginCountRepository.update({id}, updateLoginCountDto);
  }

  async remove(id: number) {
    const loginCountFound = await this.loginCountRepository.findOne({
      where: {
        id
      }
    });
    if(!loginCountFound){
      return new HttpException('Login Count no Existe', HttpStatus.NOT_FOUND);
    }
    return this.loginCountRepository.delete(id);
  }
}
