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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_users_dto_1 = require("./users-dto/create-users.dto");
const update_users_dto_1 = require("./users-dto/update-users.dto");
const signin_users_dto_1 = require("./users-dto/signin-users.dto");
const bcrypt = require("bcrypt");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllUser() {
        return this.usersService.findAll();
    }
    getOneUser(id) {
        return this.usersService.findOneById(id);
    }
    async createUser(body) {
        console.log(body);
        const passwordHash = await PasswordHasher(body.password);
        return await this.usersService.create(body.username, body.email, passwordHash);
    }
    async signinUser(body) {
        const user = await this.usersService.findByEmail(body.email);
        if (!user) {
            throw new common_1.NotFoundException('Compte Inexistant');
        }
        const isTheSamePassword = await PasswordCompare(body.password, user.password);
        if (!isTheSamePassword) {
            throw new common_1.NotFoundException('Compte Inexistant / Mot de pass incorrect');
        }
        return user;
    }
    removeUser(id) {
        return this.usersService.delete(parseInt(id));
    }
    async updateUser(id, body) {
        console.log(body);
        if (body.password) {
            const passwordHash = await PasswordHasher(body.password);
            body.password = passwordHash;
        }
        return await this.usersService.update(parseInt(id), body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_users_dto_1.signinUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signinUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users_dto_1.updateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
async function PasswordHasher(password) {
    console.log('Password to hash :' + password);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    console.log('salt :' + salt);
    console.log('hash :' + hash);
    return hash;
}
async function PasswordCompare(passwordTocompare, userPassord) {
    const isMatch = await bcrypt.compare(passwordTocompare, userPassord);
    if (!isMatch) {
        return false;
    }
    return true;
}
//# sourceMappingURL=users.controller.js.map