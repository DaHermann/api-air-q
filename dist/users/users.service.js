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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(repo, jwtService) {
        this.repo = repo;
        this.jwtService = jwtService;
    }
    async create(username, email, password) {
        const isUser = await this.repo.findOneBy({ email });
        if (isUser) {
            throw new common_1.BadRequestException('Ce compte existe déja');
        }
        else {
            const payload = { email: email, username: username };
            const api_key = await this.jwtService.signAsync(payload);
            const user = await this.repo.create({ username, email, password, api_key });
            return this.repo.save(user);
        }
    }
    async findOneById(id) {
        if (!id) {
            return null;
        }
        const user = await this.repo.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur Introuvable');
        }
        return user;
    }
    async findOneApi_key(api_key) {
        console.log('findOneApi_key api_key:' + api_key);
        if (!api_key) {
            return null;
        }
        const user = await this.repo.findOneBy({ api_key });
        console.log('user:' + user);
        if (!user) {
            return false;
        }
        return true;
    }
    async findByEmail(email) {
        const user = await this.repo.findOneBy({ email });
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur Introuvable');
        }
        return user;
    }
    findAll() {
        return this.repo.find();
    }
    async update(id, attrs) {
        const user = await this.repo.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur Introuvable');
        }
        Object.assign(user, attrs);
        return await this.repo.save(user);
    }
    async delete(id) {
        const user = await this.repo.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur Introuvable');
        }
        return this.repo.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map