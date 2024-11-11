import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;
   

    @Column()
    password: string;

    
}