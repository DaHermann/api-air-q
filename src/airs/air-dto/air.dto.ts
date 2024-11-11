import {IsString, IsNumber, IsOptional} from 'class-validator';




export class CreateAirDto {
 

    @IsString()
    station_name: string

    @IsString()
    day: string

    @IsString()
    hour: string

    @IsNumber()
    co: number

    @IsNumber()
    t_ext: number

    @IsNumber()
    t_int: number

    @IsNumber()
    no2:  number

    @IsNumber()
    o3: number

    @IsNumber()
    pm10: number

    @IsNumber()
    pm2_5: number 

    @IsNumber()
    rh: number

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
    co: number


    @IsOptional()
    @IsNumber()
    t_ext: number


    @IsOptional()
    @IsNumber()
    t_int: number


    @IsOptional()
    @IsNumber()
    no2:  number

    @IsOptional()
    @IsNumber()
    o3: number

    @IsOptional()
    @IsNumber()
    pm10: number

    @IsOptional()
    @IsNumber()
    pm2_5: number 

    @IsOptional()
    @IsNumber()
    rh: number

    // @IsOptional()
    // @IsNumber()
    // _id_station: number
}