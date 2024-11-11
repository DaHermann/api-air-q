import {Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';



@Entity()
export class Air {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    station_name: string

    @Column()
    day: string

    @Column()
    hour: string

    @Column()
    co: number

    @Column()
    t_ext: number

    @Column()
    t_int: number

    @Column()
    no2:  number

    @Column()
    o3: number

    @Column()
    pm10: number

    @Column()
    pm2_5: number 

    @Column()
    rh: number

    // @Column()
    // _id_station: number
}