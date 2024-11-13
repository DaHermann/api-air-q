import { UsersService } from './users.service';
import { CreateUserDto } from './users-dto/create-users.dto';
import { updateUsersDto } from './users-dto/update-users.dto';
import { signinUsersDto } from './users-dto/signin-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUser(): Promise<import("./user.entity").User[]>;
    getOneUser(id: number): Promise<import("./user.entity").User>;
    createUser(body: CreateUserDto): Promise<import("./user.entity").User>;
    signinUser(body: signinUsersDto): Promise<import("./user.entity").User>;
    removeUser(id: string): Promise<import("./user.entity").User>;
    updateUser(id: string, body: updateUsersDto): Promise<import("./user.entity").User>;
}
