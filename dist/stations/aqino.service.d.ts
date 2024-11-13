import { OnModuleInit } from '@nestjs/common';
import { StationsService } from 'src/stations/stations.service';
import { AirsService } from 'src/airs/air.service';
export declare class AqinoService implements OnModuleInit {
    private readonly stationsService;
    private readonly airsService;
    constructor(stationsService: StationsService, airsService: AirsService);
    onModuleInit(): Promise<void>;
    onApplicationBootstrap(): Promise<void>;
    saveData(): Promise<void>;
    getAndSaveHourlyData(): Promise<void>;
}
