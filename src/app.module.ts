import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { StationsController } from './stations/stations.controller';
import { StationsService } from './stations/stations.service';
import { StationsModule } from './stations/stations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AirsModule } from './airs/airs.module';
import { AirsService } from './airs/air.service';
import { Air } from './airs/air.entity';
import { Station } from './stations/station.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      // expandVariables: true,
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        // return {
        //   type: 'sqlite',
        //   database: 'db.sqlite',
        //   synchronize: true,
        //   entities: [User, Air, Station],
        // };

        return {
          type: 'postgres',
          // url: 'postgres://avnadmin:AVNS_FN6zZMtNIGTE3pOcFlm@@pg-3532ae1f-ndanielhermann-76fa.j.aivencloud.com:16274/api-air-db?sslmode=require',
          host: 'localhost',
          port: 5432,
          password: 'postgres',
          username: 'postgres',
          entities: [User, Air, Station], // here we have added user enitity in entities array
          database: 'api-air-db',
          synchronize: true,
          logging: true,
        
        };

      },
    }),
    UsersModule,
    StationsModule,
    AirsModule,
  ],
  controllers: [AppController, UsersController, StationsController],
  providers: [AppService, UsersService, AirsService, StationsService],
})
export class AppModule {}
