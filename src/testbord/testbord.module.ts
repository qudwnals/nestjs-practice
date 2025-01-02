import { Module } from '@nestjs/common';
import { TestbordService } from './testbord.service';
import { TestbordController } from './testbord.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TestbordEntity} from "./entities/testbord.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TestbordEntity])],
  controllers: [TestbordController],
  providers: [TestbordService],
})
export class TestbordModule {}
