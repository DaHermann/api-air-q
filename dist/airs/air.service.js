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
exports.AirsService = void 0;
const common_1 = require("@nestjs/common");
const air_entity_1 = require("./air.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AirsService = class AirsService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return this.repo.find();
    }
    async findAllByStation(station_name) {
        return this.repo.findBy({ station_name });
    }
    async findAllByTimestamp(station_name, day) {
        return await this.repo.findBy({ station_name, day });
    }
    async createAirData(airs) {
        const air = this.repo.create(airs);
        return await this.repo.save(air);
    }
    async update(id, attrs) {
        const isExistAir = await this.repo.findOneBy({ id });
        if (!isExistAir) {
            throw new common_1.NotFoundException('Enregistrement non Trouvé !');
        }
        Object.assign(isExistAir, attrs);
        return await this.repo.save(isExistAir);
    }
    async delete(id) {
        const air = await this.repo.findOneBy({ id });
        if (!air) {
            throw new common_1.NotFoundException('Air Introuvable');
        }
        return this.repo.remove(air);
    }
};
exports.AirsService = AirsService;
exports.AirsService = AirsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(air_entity_1.Air)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AirsService);
//# sourceMappingURL=air.service.js.map