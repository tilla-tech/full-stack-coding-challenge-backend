import { Controller, Get, Param, Query } from '@nestjs/common';
import { AirPort } from '@prisma/client';
import { AirPortWithPagination, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('airports')
  getAirports(@Query() query): AirPortWithPagination {
    return this.appService.getAirports(query);
  }

  @Get('airports/:iata')
  getAirport(@Param() params): Promise<AirPort> {
    return this.appService.getAirport(params);
  }
}
