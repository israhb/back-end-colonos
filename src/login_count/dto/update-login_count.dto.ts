import { PartialType } from '@nestjs/swagger';
import { CreateLoginCountDto } from './create-login_count.dto';

export class UpdateLoginCountDto extends PartialType(CreateLoginCountDto) {}
