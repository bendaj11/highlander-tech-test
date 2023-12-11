import { Injectable } from '@nestjs/common';
import { LatLng } from '../../models';
import { circle, point, pointOnSurface } from '@turf/turf';

@Injectable()
export class GoalService {
  generateRandomLocationByCoordinateAndRadius(
    originLatLng: LatLng,
    radius: number,
  ): LatLng {
    const radiusCircle = circle(
      point([originLatLng.lat, originLatLng.lng]),
      radius,
      64,
      'meters',
    );

    const randomPointFeatureCollection = pointOnSurface(radiusCircle);
    const randomPointCoordinates =
      randomPointFeatureCollection.geometry.coordinates;

    return { lat: randomPointCoordinates[0], lng: randomPointCoordinates[1] };
  }
}
