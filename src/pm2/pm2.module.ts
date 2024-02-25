import { Module } from '@nestjs/common';
import { PM2Controller } from './pm2.controller';

@Module({
  controllers: [PM2Controller]
})
export class Pm2Module {}
