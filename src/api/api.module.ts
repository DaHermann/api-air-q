import { Module} from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { UsersService } from '../users/users.service';
import {UsersModule} from '../users/users.module';
import {StationsService} from '../stations/stations.service';
import { AirsModule } from 'src/airs/airs.module';
import { AirsService } from 'src/airs/air.service';
import { StationsModule } from 'src/stations/stations.module';


@Module({
  imports: [StationsModule, UsersModule, AirsModule],
  controllers: [ApiController],
  providers: [ApiService, UsersService, StationsService, AirsService]
})
export class ApiModule {}
