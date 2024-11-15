import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
// import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
// import {User} from '../users/user.entity'

@Injectable()
export class ApiService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        // @InjectRepository(User) private  repo: Repository<User>,
      ) {}
    

    async verifyTokeken(api_Key:string) {

      const user = await this.usersService.findOneApi_key(api_Key)
      if(!user){
        throw new UnauthorizedException()
      }
      return user
    }




       //   async signIn(
    //     email: string,
    //     pass: string,
    //   ): Promise<{ access_token: string }> {
    //     const user = await this.usersService.findByEmail(email, pass);
        
    //     const payload = { sub: user.id, username: user.username };
    //     return {
    //       access_token: await this.jwtService.signAsync(payload),
    //     };
    // }
}
