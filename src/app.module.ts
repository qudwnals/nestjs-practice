import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TestbordModule } from './testbord/testbord.module';
import {TestbordEntity} from "./testbord/entities/testbord.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.RDS_HOST,
      port: 1035,
      username: process.env.RDS_USER,
      password: process.env.RDS_PSWORD,
      database: process.env.RDS_DATABASE,
      entities: [TestbordEntity],
      synchronize: true,
      autoLoadEntities : true,
      logging :true
    }),
    TestbordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
