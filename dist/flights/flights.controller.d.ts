import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flights.model';
export declare class FlightsController {
    private readonly flightService;
    constructor(flightService: FlightsService);
    create(flight: Flight): Promise<Flights[]>;
    findAll(): Promise<Flights[]>;
    getOrigins(): Promise<String[]>;
    getDestinations(): Promise<String[]>;
    query(orig: any, dest: any): Promise<any>;
    findOne(param: any): Promise<Flight>;
    update(id: any, flight: Flight): Promise<any>;
    delete(id: any): Promise<any>;
}
