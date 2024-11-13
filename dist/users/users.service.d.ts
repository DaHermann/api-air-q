import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(username: string, email: string, password: string): Promise<User>;
    findOneById(id: number): Promise<User>;
    findByEmail(email: string, password: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, attrs: Partial<User>): Promise<User>;
    delete(id: number): Promise<User>;
}
