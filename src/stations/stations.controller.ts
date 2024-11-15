import {
  Controller, Get, Patch, Delete, Param, Body, Post,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import { AirsService } from 'src/airs/air.service';
import {
  UpdateStationDto,CreationStationDto,
} from './station-dto/station.dto';
import { CreateAirDto, UpdateAirDto } from '../airs/air-dto/air.dto';



@Controller('stations')
export class StationsController{
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



  @Post('/air/create')
  async CreateStationAir(
    @Body() body: CreateAirDto
  ){
    return await this.airService.createAirData(body)
  }



  @Patch('/air/update/:id')
  async UpdateStationAir(
    @Param('id') id:string,
    @Body() body: UpdateAirDto
  ){
    return await this.airService.update(parseInt(id),body)
  }

  @Delete('/air/delete/:id')
  async deleteAir(
    @Param('id') id: number
  ){
    return await this.airService.delete(id)
  }



  @Get('/get/:id')
  async getOneStation(@Param('id') id: string) {
    return await this.stationsService.getOneStation(parseInt(id));
  }



  @Post('/create')
  async createStation(@Body() body: CreationStationDto) {
    const { station_name, station_id, station_lat, station_lon } = body;
    return await this.stationsService.createStation(
      station_name,
      station_id,
      station_lat,
      station_lon
    );
  }



  @Patch('/update/:id')
  async updateStation(@Param('id') id: string, @Body() body: UpdateStationDto) {
    return await this.stationsService.updateStation(parseInt(id), body);
  }



  @Delete('/delete/:id')
  async deleteStation(@Param('id') id: string) {
    return await this.stationsService.deleteStation(parseInt(id));
  }
}
