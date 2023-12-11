import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateUserLocation } from '../actions/map.actions';
import {
  selectGoalLocation,
  selectUserLocation,
} from '../reduders/map.reducer';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  ballIcon: google.maps.Icon = {
    url: '/assets/images/ball.png',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };
  goalIcon: google.maps.Icon = {
    url: '/assets/images/goal.png',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  goalLocation$ = this.store.select(selectGoalLocation);
  userLocation$ = this.store.select(selectUserLocation);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((geolocation) =>
        this.updateMapPosition(geolocation)
      );
    } else {
      alert('Live location not supported');
    }
  }

  private updateMapPosition(geolocation: GeolocationPosition) {
    const updatedUserLocation = {
      lat: geolocation.coords.latitude,
      lng: geolocation.coords.longitude,
    };

    this.store.dispatch(updateUserLocation({ latLng: updatedUserLocation }));
  }
}
