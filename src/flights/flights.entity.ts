import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar",{length:20})
    origin:string;

    @Column("varchar", { length:20})
    destination: string;

    @Column('timestamp with time zone')
    depart:Date;

    @Column('timestamp with time zone')
    arrive:Date;
    
    @Column({ default: false })
    nonstop:boolean;

    @Column('int')
    flightNumber: number;
}