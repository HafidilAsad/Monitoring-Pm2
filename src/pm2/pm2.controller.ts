import { Controller, Get, Post, Param } from '@nestjs/common';
import * as pm2 from 'pm2';

@Controller('pm2')
export class PM2Controller {
  @Get('processes')
  async getProcesses() {
    return new Promise((resolve, reject) => {
      pm2.list((err, list) => {
        if (err) {
          reject('Failed to fetch process list');
        } else {
          resolve(list);
        }
      });
    });
  }

  

  @Post('restart/:name')
  async restartProcess(@Param('name') name: string) {
    return new Promise((resolve, reject) => {
      pm2.restart(name, (err) => {
        if (err) {
          reject('Failed to restart process');
        } else {
          resolve(`Restarting process ${name}`);
        }
      });
    });
  }
}