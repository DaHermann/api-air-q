import {Entity, Column, PrimaryGeneratedColumn, IsNull} from 'typeorm';



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
    co: string

    @Column()
    t_ext: string

    @Column()
    t_int: string

    @Column()
    no2:  string

    @Column()
    o3: string

    @Column()
    pm10: string

    @Column()
    pm2_5: string 

    @Column()
    rh: string

    // @Column()
    // _id_station: number
}