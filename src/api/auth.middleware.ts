import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly userService: UsersService){

  }

  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Middle Request...');

    const api_key = req.headers.api_key? req.headers.api_key.toString() : '';

    if(!api_key){
      throw new UnauthorizedException('CLE API INEXISTANT !!!')
    }
    
    const apiUser = await this.userService.findOneApi_key(api_key)

    if(!apiUser){
      throw new UnauthorizedException('CLE API INCORRECT !!!')
    }
    next();
  }

}