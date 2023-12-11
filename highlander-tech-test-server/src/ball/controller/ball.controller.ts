import { Controller, Get, Param, Query } from '@nestjs/common';
import { BallService } from '../service/ball.service';
import { LatLng } from '../../models';

@Controller('ball')
export class BallController {
  constructor(private readonly ballService: BallService) {}

  @Get('isNearGoal/:ballLat/:ballLng/:goalLat/:goalLng/:radiusInMeters')
  isBallNearGoal(
    @Param('ballLat') ballLat: number,
    @Param('ballLng') ballLng: number,
    @Param('goalLat') goalLat: number,
    @Param('goalLng') goalLng: number,
    @Param('radiusInMeters') radius: number,
  ) {
    const ballLatLng: LatLng = { lat: ballLat, lng: ballLng };
    const goalLatLng: LatLng = { lat: goalLat, lng: goalLng };

    return this.ballService.isBallNearGoal(ballLatLng, goalLatLng, radius);
  }
}
