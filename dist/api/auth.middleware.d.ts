import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UsersService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
