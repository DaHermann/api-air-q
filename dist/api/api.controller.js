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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const air_service_1 = require("../airs/air.service");
const stations_service_1 = require("../stations/stations.service");
let ApiController = class ApiController {
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
    async getOneStation(id) {
        return await this.stationsService.getOneStation(parseInt(id));
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAllStations", null);
__decorate([
    (0, common_1.Get)('/air/get/:station_name/'),
    __param(0, (0, common_1.Param)('station_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getStationAir", null);
__decorate([
    (0, common_1.Get)('/air/get/:station_name/:day'),
    __param(0, (0, common_1.Param)('station_name')),
    __param(1, (0, common_1.Param)('day')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getStationAirByTime", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getOneStation", null);
exports.ApiController = ApiController = __decorate([
    (0, common_1.Controller)('api/v1/'),
    __metadata("design:paramtypes", [stations_service_1.StationsService,
        air_service_1.AirsService])
], ApiController);
//# sourceMappingURL=api.controller.js.map