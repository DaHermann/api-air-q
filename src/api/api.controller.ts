import { Controller, Get, Param, UseGuards} from '@nestjs/common';
import { AirsService } from '../airs/air.service';
import { StationsService } from 'src/stations/stations.service';

@Controller('api/v1/')
export class ApiController {

    constructor(
        private readonly stationsService: StationsService,
        private readonly airService: AirsService,
      ) {}
    

    @Get()
    async getAllStations() {
    // console.log('Station get all');
        return this.stationsService.getAllStations();
    }



    @Get('/air/get/:station_name/')
    async getStationAir(@Param('station_name') station_name:string){
        return await this.airService.findAllByStation(station_name)
    }


    
    @Get('/air/get/:station_name/:day')
    async getStationAirByTime(
        @Param('station_name') station_name:string, 
        @Param('day') day:string
    ){
        return await this.airService.findAllByTimestamp(station_name, day)
    }

    @Get('/get/:id')
    async getOneStation(@Param('id') id: string) {
        return await this.stationsService.getOneStation(parseInt(id));
    }
    

}
