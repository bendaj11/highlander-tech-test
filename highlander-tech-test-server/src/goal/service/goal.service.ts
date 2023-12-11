import {Injectable} from '@nestjs/common';
import {LatLng} from '../../models';
import {destination, point} from '@turf/turf';

@Injectable()
export class GoalService {
  generateRandomLocationByCoordinateAndRadius(
    originLatLng: LatLng,
    radius: number,
  ): LatLng {
    const randomAngle = Math.random() * 2 * Math.PI;
    const randomDistance = Math.random() * (radius / 1000);

    const dx = randomDistance * Math.cos(randomAngle);
    const dy = randomDistance * Math.sin(randomAngle);

    const newPoint = destination(point([originLatLng.lat, originLatLng.lng]), dx, dy);

    const randomPointCoordinates = newPoint.geometry.coordinates


    return { lat: randomPointCoordinates[0], lng: randomPointCoordinates[1] };
  }
}
