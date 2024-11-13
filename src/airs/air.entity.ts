import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';



@Entity()
export class Air {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    station_name: string

    @Column({ nullable: true })
    day: string

    @Column({ nullable: true })
    hour: string

    @Column({ nullable: true })
    co: string

    @Column({ nullable: true })
    t_ext: string

    @Column({ nullable: true })
    t_int: string

    @Column({ nullable: true })
    no2:  string

    @Column({ nullable: true })
    o3: string

    @Column({ nullable: true })
    pm10: string

    @Column({ nullable: true })
    pm2_5: string 

    @Column({ nullable: true })
    rh: string

    // @Column()
    // _id_station: number
}