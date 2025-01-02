import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestbordService } from './testbord.service';
import { CreateTestbordDto } from './dto/create-testbord.dto';
import { UpdateTestbordDto } from './dto/update-testbord.dto';

@Controller('testbord')
export class TestbordController {
  constructor(private readonly testbordService: TestbordService) {}

  @Post()
  create(@Body() createTestbordDto: CreateTestbordDto) {
    return this.testbordService.create(createTestbordDto);
  }

  @Get()
  findAll() {
    return this.testbordService.findAll();
  }

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.testbordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestbordDto: UpdateTestbordDto) {
    return this.testbordService.update(+id, updateTestbordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testbordService.remove(+id);
  }
}
