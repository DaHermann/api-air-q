import {IsString, IsEmail, IsNumber, IsOptional} from 'class-validator';


export class CreationStationDto {

    @IsString()
    station_name: string;

    @IsNumber()
    station_id: number;

    @IsNumber()
    station_lat: number;

    @IsNumber()
    station_lon: number;
}


export class UpdateStationDto {

    @IsString()
    @IsOptional()
    station_name: string;

    @IsNumber()
    @IsOptional()
    station_id: number;

    @IsNumber()
    @IsOptional()
    station_lat: number;

    @IsNumber()
    @IsOptional()
    station_lon: number;
}