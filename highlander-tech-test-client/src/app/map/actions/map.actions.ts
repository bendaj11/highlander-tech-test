import { createAction, props } from '@ngrx/store';

export const updateUserLocation = createAction(
  '[ Map ] update user location',
  props<{ latLng: google.maps.LatLngLiteral }>()
);

export const updateGoalLocation = createAction(
  '[ Map ] update goal location',
  props<{ latLng: google.maps.LatLngLiteral }>()
);

export const updateIsUserNearGoal = createAction(
  '[ Map ] is user near goal',
  props<{ isUserNearGoal: boolean }>()
);
