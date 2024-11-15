import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private repo;
    private jwtService;
    constructor(repo: Repository<User>, jwtService: JwtService);
    create(username: string, email: string, password: string): Promise<User>;
    findOneById(id: number): Promise<User>;
    findOneApi_key(api_key: string): Promise<boolean>;
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, attrs: Partial<User>): Promise<User>;
    delete(id: number): Promise<User>;
}
