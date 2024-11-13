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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationsController = void 0;
const common_1 = require("@nestjs/common");
const stations_service_1 = require("./stations.service");
const air_service_1 = require("../airs/air.service");
const station_dto_1 = require("./station-dto/station.dto");
const air_dto_1 = require("../airs/air-dto/air.dto");
let StationsController = class StationsController {
    constructor(stationsService, airService) {
        this.stationsService = stationsService;
        this.airService = airService;
    }
    async getAllStations() {
        return this.stationsService.getAllStations();
    }
    async getStationAir(station_name) {
        return await this.airService.findAllByStation(station_name);
    }
    async getStationAirByTime(station_name, day) {
        return await this.airService.findAllByTimestamp(station_name, day);
    }
    async CreateStationAir(body) {
        return await this.airService.createAirData(body);
    }
    async UpdateStationAir(id, body) {
        return await this.airService.update(parseInt(id), body);
    }
    async deleteAir(id) {
        return await this.airService.delete(id);
    }
    async getOneStation(id) {
        return await this.stationsService.getOneStation(parseInt(id));
    }
    async createStation(body) {
        const { station_name, station_id, station_lat, station_lon } = body;
        return await this.stationsService.createStation(station_name, station_id, station_lat, station_lon);
    }
    async updateStation(id, body) {
        return await this.stationsService.updateStation(parseInt(id), body);
    }
    async deleteStation(id) {
        return await this.stationsService.deleteStation(parseInt(id));
    }
};
exports.StationsController = StationsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getAllStations", null);
__decorate([
    (0, common_1.Get)('/air/get/:station_name/'),
    __param(0, (0, common_1.Param)('station_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getStationAir", null);
__decorate([
    (0, common_1.Get)('/air/get/:station_name/:day'),
    __param(0, (0, common_1.Param)('station_name')),
    __param(1, (0, common_1.Param)('day')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getStationAirByTime", null);
__decorate([
    (0, common_1.Post)('/air/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [air_dto_1.CreateAirDto]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "CreateStationAir", null);
__decorate([
    (0, common_1.Patch)('/air/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, air_dto_1.UpdateAirDto]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "UpdateStationAir", null);
__decorate([
    (0, common_1.Delete)('/air/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "deleteAir", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "getOneStation", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [station_dto_1.CreationStationDto]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "createStation", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, station_dto_1.UpdateStationDto]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "updateStation", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationsController.prototype, "deleteStation", null);
exports.StationsController = StationsController = __decorate([
    (0, common_1.Controller)('stations'),
    __metadata("design:paramtypes", [stations_service_1.StationsService,
        air_service_1.AirsService])
], StationsController);
//# sourceMappingURL=stations.controller.js.map