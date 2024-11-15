import { Module } from '@nestjs/common';
import { AirsService } from 'src/airs/air.service';
import { AirsModule } from 'src/airs/airs.module';
import { AqinoService } from './aqino.service';
import { StationsService } from './stations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './station.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Station]), AirsModule],
  controllers: [],
  providers: [StationsService, AirsService, AqinoService],
  exports: [TypeOrmModule],
})
export class StationsModule {}
