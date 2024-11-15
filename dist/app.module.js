"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const stations_controller_1 = require("./stations/stations.controller");
const stations_service_1 = require("./stations/stations.service");
const stations_module_1 = require("./stations/stations.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/user.entity");
const config_1 = require("@nestjs/config");
const airs_module_1 = require("./airs/airs.module");
const air_service_1 = require("./airs/air.service");
const air_entity_1 = require("./airs/air.entity");
const station_entity_1 = require("./stations/station.entity");
const api_module_1 = require("./api/api.module");
const auth_middleware_1 = require("./api/auth.middleware");
const api_controller_1 = require("./api/api.controller");
const api_service_1 = require("./api/api.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: 'api/*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        type: 'postgres',
                        host: 'localhost',
                        port: 5432,
                        password: 'postgres',
                        username: 'postgres',
                        entities: [user_entity_1.User, air_entity_1.Air, station_entity_1.Station],
                        database: 'api-air-db',
                        synchronize: true,
                        logging: true,
                    };
                },
            }),
            users_module_1.UsersModule,
            stations_module_1.StationsModule,
            airs_module_1.AirsModule,
            api_module_1.ApiModule,
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, stations_controller_1.StationsController, api_controller_1.ApiController],
        providers: [app_service_1.AppService, users_service_1.UsersService, air_service_1.AirsService, stations_service_1.StationsService, api_service_1.ApiService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map