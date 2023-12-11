import { Module } from '@nestjs/common';
import { GoalService } from './service/goal.service';
import { GoalController } from './controller/goal.controller';

@Module({
  providers: [GoalService],
  controllers: [GoalController]
})
export class GoalModule {}
