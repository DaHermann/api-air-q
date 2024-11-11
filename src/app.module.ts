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
          url: 'postgres://avnadmin:AVNS_FN6zZMtNIGTE3pOcFlm@@pg-3532ae1f-ndanielhermann-76fa.j.aivencloud.com:16274/api-air-db?sslmode=require',
          // host: 'pg-3532ae1f-ndanielhermann-76fa.j.aivencloud.com',
          // port: 16274,
          // password: ' AVNS_FN6zZMtNIGTE3pOcFlm',
          // username: 'avnadmin',
          entities: [User, Air, Station], // here we have added user enitity in entities array
          // database: 'api-air-db',
          // synchronize: true,
          // logging: true,
          // sslmode: "require",
          ssl: {
            rejectUnauthorized: true,
            ca: `
-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIULbT2kaqliiNcR9lu7ULRTbeEU8MwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjljMGFiNWEtY2RiZC00NmI4LTk5ZDktMzcyYWNjNGM3
NTU4IFByb2plY3QgQ0EwHhcNMjQxMTExMTg1NzEzWhcNMzQxMTA5MTg1NzEzWjA6
MTgwNgYDVQQDDC9iOWMwYWI1YS1jZGJkLTQ2YjgtOTlkOS0zNzJhY2M0Yzc1NTgg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAL5VYr6B
niEr9cNx4UhcrbLJ4RpV+gblDnsvC7n5OrvmV50okkKLeD4CiNgCkE2gF61Ap0Zb
OQEaZHHrejEKPoB3g7qeFJDT5gdRF54iDEcxkM8uNnfQ4Q2OkvKuUiZOhYyOyguT
+lcO+qk9jVg8mVvN+qM5JaGUxcdVWTSiHQotVn6aODrBkzlCyTFXOU3V0dpX/MWt
3hOOs+9WzgVC1l5dpBV0ilPCJJqyRjo5wlebugV6D3JesbS4eZc0BRgMh19QGN7W
8SFtifMJuxztwKa4bp/pHR4f3j5hlfai00R1QiRfO7jaJdljCRRVGZhQr0JZe0g0
TRMgDOecPc8L63aw1w+R6pY6Y8KHyUBlJN9+MDJWwJJIvKFXNWpcaBufqOceSNOB
hR0ho7s82cI2DHBEsraBy2BXOWPINqGvumNGmkEKOMsBQulm6yvG41/oMw3MU6f+
iFVmC+Hn9jTyPGEGvJiICmQ032SKNpJMkioYAkKQVq9yR5vYVJu15JHKwwIDAQAB
oz8wPTAdBgNVHQ4EFgQUh3LdqYc0qKIBebpdREGIIBwFOjIwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGWfPLhITh1UfrcK
UQPT5irqUUmnnXR8I0rwacwol6g0WpVmicdHxj/L6pQ+v2LvJi22EySR4yBxwHtl
gOlsVnQaiEJr13Ln7VEf+FSOEN65cqSDGR9DRYxRFGln9UzluYvUJd+7CuyI3NAJ
pYtlOtSGATi80Cz5DEOBWCqL1xdMm7Y7ANqVnCEXJpUH0KJidzFVz4tOTFWoGTbG
G6JctUEuqC/hX9TpQLTjkBktZ70C5s7NQeZgy01ITD8sGsEc4waltMIksxqCsffX
l8W04tz6IKTmb5+tTHhYawA3uSsKu8fUk4RmOdpB9fh5e5FYKgDSAQej72eeCNzd
ZDrghUcIhUWvQfSgwqxRtH3DlFafvTKM1bPjO568PIF+FSp172H0NGze+Qe1dD7m
g9gMlhlv/X0DM3fVa/XswHQM5JRu4zrcZzJY3FkaXO6YwojUQFSRx9rXosOHdAod
mXM/lziDzKtWFri7+ToLcUuwE2zQb55y1k6PdP8lvaSZVCx+Ng==
-----END CERTIFICATE-----`,
          },
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
