import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { send } from './util/connectFabric';
=======
import { send } from './util/connectFabic';
>>>>>>> aa202380c488d378218cadf75310102cafc6e9a1

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello World!' };
  }

  async init(user: string, userVal: string) {
    const args = [user, userVal];
    console.log(`Init Args: ${args}`);
    return await send(false, 'init', args);
  }

  async changeMoney(userinfo: string, amount: string) {
    const args = [userinfo, amount];
    console.log(`ChangeMoney Args: ${args}`);
    return await send(false, 'changeMoney', args);
  }

  async invokePoint(sender: string, receiver: string, amount: string) {
    const args = [sender, receiver, amount];
    return await send(false, 'invokePoint', args);
  }

  async invokeCash(sender: string, receiver: string, amount: string) {
    const args = [sender, receiver, amount];
    return await send(false, 'invokeCash', args);
  }

  async query(name: string): Promise<any> {
    const args = [name];
    console.log(`Query Args: ${args}`);
    const result = await send(true, 'query', args);
    console.log(`Query Result: ${result}`);
    return result;
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
