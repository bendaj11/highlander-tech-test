import { Module } from '@nestjs/common';
import { BallModule } from './ball/ball.module';
import { GoalModule } from './goal/goal.module';

@Module({
  imports: [BallModule, GoalModule],
})
export class AppModule {}
