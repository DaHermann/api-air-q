import { Air } from './air.entity';
import { Repository } from 'typeorm';
import { CreateAirDto } from './air-dto/air.dto';
export declare class AirsService {
    private repo;
    constructor(repo: Repository<Air>);
    findAll(): Promise<Air[]>;
    findAllByStation(station_name: string): Promise<Air[]>;
    findAllByTimestamp(station_name: string, day: string): Promise<Air[]>;
    createAirData(airs: CreateAirDto): Promise<Air>;
    update(id: number, attrs: Partial<Air>): Promise<Air>;
    delete(id: number): Promise<Air>;
}
