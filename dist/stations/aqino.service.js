"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AqinoService = void 0;
const common_1 = require("@nestjs/common");
const stations_service_1 = require("./stations.service");
const air_service_1 = require("../airs/air.service");
let AqinoService = class AqinoService {
    constructor(stationsService, airsService) {
        this.stationsService = stationsService;
        this.airsService = airsService;
    }
    async onModuleInit() {
    }
    async onApplicationBootstrap() {
        console.log('Booted : -----------');
        await this.saveData();
        setInterval(async () => {
            console.log('-------------Hourly execution-------------------');
            await this.getAndSaveHourlyData();
        }, (1000 * 60 * 60));
    }
    async saveData() {
        const stationIDs = [283164601, 283181971];
        const dbDATA = await this.airsService.findAll();
        if (dbDATA.length == 0) {
            stationIDs.map(async (stationID) => {
                console.log(stationID);
                await fetch(`https://airqino-api.magentalab.it/v3/getStationHourlyAvg/${stationID}`)
                    .then(response => response.json())
                    .then(async (dataJSON) => {
                    await dataJSON.data.forEach(async (air) => {
                        const [day, hour] = air.timestamp.split(' ');
                        const dataTosave = {
                            station_id: dataJSON.header.station_id,
                            station_name: dataJSON.header.station_name,
                            day: day,
                            hour: hour,
                            co: air.CO,
                            t_ext: air.T,
                            t_int: air['T. int.'],
                            no2: air.NO2,
                            o3: air.O3,
                            pm10: air.PM10,
                            pm2_5: air['PM2.5'],
                            rh: air.RH
                        };
                        await this.airsService.createAirData(dataTosave);
                    });
                })
                    .then(() => console.log('Data saved'));
            });
        }
        else {
            console.log('Airs Database is not EMPTY');
        }
    }
    async getAndSaveHourlyData() {
        const stations = await this.stationsService.getAllStations();
        if (stations.length !== 0) {
            stations.map(async (station) => {
                console.log("sattion name", station.station_name);
                console.log("sattion id", station.station_id);
                await fetch(`https://airqino-api.magentalab.it/getLastValuesRaw/${station.station_name}`)
                    .then(response => response.json())
                    .then(async (dataJSON) => {
                    const dataToSave = {
                        station_id: '',
                        station_name: '',
                        day: '',
                        hour: '',
                        co: '',
                        t_ext: '',
                        t_int: '',
                        no2: '',
                        o3: '',
                        pm10: '',
                        pm2_5: '',
                        rh: ''
                    };
                    const [lastday, lastHour] = dataJSON.last_timestamp.split(' ');
                    dataToSave.day = lastday;
                    dataToSave.hour = lastHour;
                    dataToSave.station_id = station.station_id;
                    dataToSave.station_name = station.station_name;
                    await dataJSON.values.forEach(async (air) => {
                        switch (air.sensor) {
                            case 'extT':
                                dataToSave.t_ext = air.value;
                                break;
                            case 'rh':
                                dataToSave.rh = air.value;
                                break;
                            case 'intT':
                                dataToSave.t_int = air.value;
                                break;
                            case 'o3':
                                dataToSave.o3 = air.value;
                                break;
                            case 'no2':
                                dataToSave.no2 = air.value;
                                break;
                            case 'co':
                                dataToSave.co = air.value;
                                break;
                            case 'pm25':
                                dataToSave.pm2_5 = air.value;
                                break;
                            case 'pm10':
                                dataToSave.pm10 = air.value;
                                break;
                            default:
                                break;
                        }
                    });
                    console.log('DataToSave', dataToSave);
                    return dataToSave;
                })
                    .then(async (data) => {
                    await this.airsService.createAirData(data);
                    console.log('Data saved');
                });
            });
        }
    }
};
exports.AqinoService = AqinoService;
exports.AqinoService = AqinoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stations_service_1.StationsService,
        air_service_1.AirsService])
], AqinoService);
//# sourceMappingURL=aqino.service.js.map