import { Injectable } from '@nestjs/common';
import { LatLng } from '../../models';
import distance from '@turf/distance';
import { point } from '@turf/turf';

@Injectable()
export class BallService {
  isBallNearGoal(ballLocation: LatLng, goalLocation: LatLng, radius: number) {
    const ballTurfPoint = point([ballLocation.lat, ballLocation.lng]);
    const goalTurfPoint = point([goalLocation.lat, goalLocation.lng]);
    const ballDistanceFromGoal = distance(
      ballTurfPoint,
      goalTurfPoint,
      'meters',
    );

    return ballDistanceFromGoal <= radius;
  }
}
