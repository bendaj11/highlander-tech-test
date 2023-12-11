import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  updateIsUserNearGoal,
  updateGoalLocation,
  updateUserLocation,
} from '../actions/map.actions';
import { state } from '@angular/animations';

export const mapStateFeatureKey = 'map-state';

interface MapState {
  isUserNearGoal: boolean;
  goalLocation: google.maps.LatLngLiteral | undefined;
  userLocation: google.maps.LatLngLiteral | undefined;
}

const mapInitialState: MapState = {
  isUserNearGoal: false,
  goalLocation: undefined,
  userLocation: undefined,
};

export const mapReducer = createReducer(
  mapInitialState,
  on(updateUserLocation, (state, { latLng }) => ({
    ...state,
    userLocation: latLng,
  })),
  on(updateGoalLocation, (state, { latLng }) => ({
    ...state,
    goalLocation: latLng,
  })),
  on(updateIsUserNearGoal, (state, { isUserNearGoal }) => ({
    ...state,
    isUserNearGoal,
  }))
);

const selectMapState = createFeatureSelector<MapState>(mapStateFeatureKey);

export const selectUserLocation = createSelector(
  selectMapState,
  (state) => state.userLocation
);

export const selectGoalLocation = createSelector(
  selectMapState,
  (state) => state.goalLocation
);

export const selectIsUserNearGoal = createSelector(
  selectMapState,
  (state) => state.isUserNearGoal
);
