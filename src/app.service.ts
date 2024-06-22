import { Injectable } from '@nestjs/common';
import { send } from './util/connectFabric';

@Injectable()
export class AppService {
  getHello() {
    return {message: 'Hello World!'};
  }

  async init(user:string, userval:string){
    const args = [user, userval];
    return await send(false, 'init', args);
  }


  async chargeMoney(userInfo:string, amount:string){
    const args = [userInfo, amount];
    return await send(false, 'cahrgeMoney', args);
  }


}
