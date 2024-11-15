import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class ApiService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    verifyTokeken(api_Key: string): Promise<boolean>;
}
