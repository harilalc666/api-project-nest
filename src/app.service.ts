import { Injectable } from '@nestjs/common';

const currentTimestamp = new Date();
const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
const istTimestamp = new Date(currentTimestamp.getTime() + istOffset);

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Pong',
      time: istTimestamp
    };
  }
}
