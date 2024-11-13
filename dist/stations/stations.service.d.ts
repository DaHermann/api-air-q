import { Station } from './station.entity';
import { Repository } from 'typeorm';
export declare class StationsService {
    private repo;
    constructor(repo: Repository<Station>);
    createStation(station_name: string, station_id: number, station_lat: number, station_lon: number): Promise<Station>;
    getAllStations(): Promise<Station[]>;
    getOneStation(id: number): Promise<Station>;
    updateStation(id: number, attrs: Partial<Station>): Promise<Station>;
    deleteStation(id: number): Promise<Station>;
}
