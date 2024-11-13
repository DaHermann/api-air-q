"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationsModule = void 0;
const common_1 = require("@nestjs/common");
const air_service_1 = require("../airs/air.service");
const airs_module_1 = require("../airs/airs.module");
const aqino_service_1 = require("./aqino.service");
const stations_service_1 = require("./stations.service");
const typeorm_1 = require("@nestjs/typeorm");
const station_entity_1 = require("./station.entity");
let StationsModule = class StationsModule {
};
exports.StationsModule = StationsModule;
exports.StationsModule = StationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([station_entity_1.Station]), airs_module_1.AirsModule],
        controllers: [],
        providers: [stations_service_1.StationsService, air_service_1.AirsService, aqino_service_1.AqinoService],
        exports: [typeorm_1.TypeOrmModule],
    })
], StationsModule);
//# sourceMappingURL=stations.module.js.map