import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { updateGoalLocation } from '../actions/map.actions';
import {
  selectGoalLocation,
  selectUserLocation,
} from '../reduders/map.reducer';
import { combineLatest, filter, first, map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapEffects {
  constructor(
    private readonly store: Store,
    private readonly httpClient: HttpClient
  ) {}

  getGoalLocation$ = createEffect(() =>
    this.store.select(selectUserLocation).pipe(
      filter(Boolean),
      first(),
      switchMap((userLocation) =>
        this.httpClient.get<google.maps.LatLngLiteral>(
          `http://localhost:3000/goal/location/${userLocation.lat}/${userLocation.lng}/1000`
        )
      ),
      map((goalLocation) => updateGoalLocation({ latLng: goalLocation }))
    )
  );

  isUserNearGoal$ = createEffect(
    () =>
      combineLatest([
        this.store.select(selectUserLocation).pipe(filter(Boolean)),
        this.store.select(selectGoalLocation).pipe(filter(Boolean)),
      ]).pipe(
        switchMap(([userLocation, goalLocation]) =>
          this.httpClient.get<boolean>(
            `http://localhost:3000/ball/isNearGoal/${userLocation.lat}/${userLocation.lng}/${goalLocation.lat}/${goalLocation.lng}/10`
          )
        ),
        filter(Boolean),
        first(),
        tap((isUserNearGoal) => alert('GOAL!!!!!!'))
      ),
    { dispatch: false }
  );
}
