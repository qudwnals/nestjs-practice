import { PartialType } from '@nestjs/mapped-types';
import { CreateTestbordDto } from './create-testbord.dto';

export class UpdateTestbordDto extends PartialType(CreateTestbordDto) {}
