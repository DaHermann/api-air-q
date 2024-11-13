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
exports.Air = void 0;
const typeorm_1 = require("typeorm");
let Air = class Air {
};
exports.Air = Air;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Air.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "station_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "co", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "t_ext", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "t_int", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "no2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "o3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "pm10", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "pm2_5", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Air.prototype, "rh", void 0);
exports.Air = Air = __decorate([
    (0, typeorm_1.Entity)()
], Air);
//# sourceMappingURL=air.entity.js.map