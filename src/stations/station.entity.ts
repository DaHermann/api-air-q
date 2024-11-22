import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Station {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    station_name: string;
    
    @Column()
    station_id: number;

    @Column()
    station_lat: string;

    @Column()
    station_lon: string;
}   