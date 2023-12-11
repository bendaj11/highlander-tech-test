import { Module } from '@nestjs/common';
import { BallController } from './controller/ball.controller';
import { BallService } from './service/ball.service';

@Module({
  controllers: [BallController],
  providers: [BallService]
})
export class BallModule {}
