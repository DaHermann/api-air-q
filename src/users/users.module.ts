import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

/**
 * Module Users
 */
@Module({
    imports: [ 
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2592000s' },
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [TypeOrmModule]
})

export class UsersModule {}
