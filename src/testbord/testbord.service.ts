import { Injectable } from '@nestjs/common';
import { CreateTestbordDto } from './dto/create-testbord.dto';
import { UpdateTestbordDto } from './dto/update-testbord.dto';
import {TestbordEntity} from "./entities/testbord.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {throwIfEmpty} from "rxjs";

@Injectable()
export class TestbordService {

  constructor(
      @InjectRepository(TestbordEntity)
      private testEntityRepository: Repository<TestbordEntity>,
  ) {}

  create(createTestbordDto: CreateTestbordDto) {
    this.testEntityRepository.save(createTestbordDto).then(() => throwIfEmpty());

    return 'This action adds a new board!!';
  }

  findAll() {

    return this.testEntityRepository.find();
  }

  findOne(id: number) {
    return this.testEntityRepository.findOneBy({id});
  }

  update(id: number, updateTestbordDto: UpdateTestbordDto) {
   return this.testEntityRepository.update(id ,updateTestbordDto)
  }

  remove(id: number) {
    return this.testEntityRepository.delete(id);
  }
}
