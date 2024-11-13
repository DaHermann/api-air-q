import {IsString, IsNumber, IsOptional} from 'class-validator';




export class CreateAirDto {
 

    @IsString()
    station_name: string

    @IsString()
    day: string

    @IsString()
    hour: string

    @IsNumber()
    co: string

    @IsNumber()
    t_ext: string

    @IsNumber()
    t_int: string

    @IsNumber()
    no2:  string

    @IsNumber()
    o3: string

    @IsNumber()
    pm10: string

    @IsNumber()
    pm2_5: string 

    @IsNumber()
    rh: string

    // @IsNumber()
    // _id_station: number
}


export class UpdateAirDto {
 
    @IsOptional()
    @IsString()
    station_name: string

    @IsOptional()
    @IsString()
    day: string

    @IsOptional()   
    @IsString()
    hour: string

    @IsOptional()
    @IsNumber()
    co: string


    @IsOptional()
    @IsNumber()
    t_ext: string


    @IsOptional()
    @IsNumber()
    t_int: string


    @IsOptional()
    @IsNumber()
    no2:  string

    @IsOptional()
    @IsNumber()
    o3: string

    @IsOptional()
    @IsNumber()
    pm10: string

    @IsOptional()
    @IsNumber()
    pm2_5: string 

    @IsOptional()
    @IsNumber()
    rh: string

    // @IsOptional()
    // @IsNumber()
    // _id_station: number
}