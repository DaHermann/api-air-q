import { Module } from '@nestjs/common';
import { AirsService } from './air.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Air } from './air.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Air])],
  providers: [],
  exports: [TypeOrmModule],
})
export class AirsModule {}
