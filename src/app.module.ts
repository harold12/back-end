import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './car/cars.entity';
import { CarModule } from './car/car.module';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'transportation',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        retryDelay:3000,
        retryAttempts:10
      }),
    CarModule,FlightsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
