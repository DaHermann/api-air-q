import { StationsService } from './stations.service';
import { AirsService } from 'src/airs/air.service';
import { UpdateStationDto, CreationStationDto } from './station-dto/station.dto';
import { CreateAirDto, UpdateAirDto } from '../airs/air-dto/air.dto';
export declare class StationsController {
    private readonly stationsService;
    private readonly airService;
    constructor(stationsService: StationsService, airService: AirsService);
    getAllStations(): Promise<import("./station.entity").Station[]>;
    getStationAir(station_name: string): Promise<import("../airs/air.entity").Air[]>;
    getStationAirByTime(station_name: string, day: string): Promise<import("../airs/air.entity").Air[]>;
    CreateStationAir(body: CreateAirDto): Promise<import("../airs/air.entity").Air>;
    UpdateStationAir(id: string, body: UpdateAirDto): Promise<import("../airs/air.entity").Air>;
    deleteAir(id: number): Promise<import("../airs/air.entity").Air>;
    getOneStation(id: string): Promise<import("./station.entity").Station>;
    createStation(body: CreationStationDto): Promise<import("./station.entity").Station>;
    updateStation(id: string, body: UpdateStationDto): Promise<import("./station.entity").Station>;
    deleteStation(id: string): Promise<import("./station.entity").Station>;
}
