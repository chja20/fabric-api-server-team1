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
<<<<<<< HEAD
    @Query('userval') userval: string,
  ): Promise<string> {
    return this.appService.init(user, userval);
=======
    @Query('userVal') userVal: string,
  ): Promise<string> {
    return this.appService.init(user, userVal);
>>>>>>> aa202380c488d378218cadf75310102cafc6e9a1
  }

  @Get('/chargeMoney')
  async chargeMoney(
<<<<<<< HEAD
    @Query('userInfo') userInfo: string,
    @Query('amount') amount: string,
  ): Promise<string> {
    return this.appService.init(userInfo, amount);
=======
    @Query('userinfo') userinfo: string,
    @Query('amount') amount: string,
  ): Promise<string> {
    return this.appService.changeMoney(userinfo, amount);
  }
  
  @Get('/invokePoint')
  async invokePoint(
    @Query('sender') sender: string,
    @Query('receiver') receiver: string,
    @Query('amount') amount: string,
  ): Promise<any> {
    return this.appService.invokePoint(sender, receiver, amount);
  }

  @Get('/invokeCash')
  async invokeCash(
    @Query('sender') sender: string,
    @Query('receiver') receiver: string,
    @Query('amount') amount: string,
  ): Promise<any> {
    return this.appService.invokeCash(sender, receiver, amount);
  }

  @Get('/query')
  async query(
    @Query('name') name: string,
  ): Promise<any> {
    return this.appService.query(name);
  }
}
