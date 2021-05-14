import { CarService } from './car.service';
import { Cars } from './cars.entity';
export declare class CarController {
    private readonly CarService;
    constructor(CarService: CarService);
    findAll(): Promise<Cars[]>;
    findOne(param: any): Promise<Cars[]>;
}
