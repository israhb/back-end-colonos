import { Module } from '@nestjs/common';
import { LoginCountService } from './login_count.service';
import { LoginCountController } from './login_count.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginCount } from './entities/login_count.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([LoginCount])
  ],
  controllers: [LoginCountController],
  providers: [LoginCountService],
  exports:[LoginCountService]
})
export class LoginCountModule {}
