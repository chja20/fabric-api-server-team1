import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return this.appService.getHello();
  }

  @Get('/init')
  async init(
    @Query('user') user: string,
    @Query('userval') userval: string,
  ): Promise<string> {
    return this.appService.init(user, userval);
  }

  @Get('/chargeMoney')
  async chargeMoney(
    @Query('userInfo') userInfo: string,
    @Query('amount') amount: string,
  ): Promise<string> {
    return this.appService.init(userInfo, amount);
  }
}
