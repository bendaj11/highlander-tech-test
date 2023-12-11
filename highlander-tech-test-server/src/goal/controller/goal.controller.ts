import { Controller, Get, Param, Query } from '@nestjs/common';
import { GoalService } from '../service/goal.service';
import { LatLng } from '../../models';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Get('location/:lat/:lng/:radiusInMeters')
  getGoalRandomLocation(
    @Param('lat') lat: number,
    @Param('lng') lng: number,
    @Param('radiusInMeters') radius: number,
  ) {
    const originLatLng: LatLng = { lat, lng };

    return this.goalService.generateRandomLocationByCoordinateAndRadius(
      originLatLng,
      radius,
    );
  }
}
