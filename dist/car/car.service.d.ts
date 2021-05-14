import { Repository } from 'typeorm';
import { Cars } from './cars.entity';
export declare class CarService {
    private readonly carsRepository;
    constructor(carsRepository: Repository<Cars>);
    findAll(): Promise<Cars[]>;
    findOne(id: number): Promise<any>;
}
