import { AirsService } from '../airs/air.service';
import { StationsService } from 'src/stations/stations.service';
export declare class ApiController {
    private readonly stationsService;
    private readonly airService;
    constructor(stationsService: StationsService, airService: AirsService);
    getAllStations(): Promise<import("../stations/station.entity").Station[]>;
    getStationAir(station_name: string): Promise<import("../airs/air.entity").Air[]>;
    getStationAirByTime(station_name: string, day: string): Promise<import("../airs/air.entity").Air[]>;
    getOneStation(id: string): Promise<import("../stations/station.entity").Station>;
}
