import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './component/map.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { StoreModule } from '@ngrx/store';
import { mapReducer, mapStateFeatureKey } from './reduders/map.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects } from './effects/map.effects';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    EffectsModule.forFeature([MapEffects]),
    StoreModule.forFeature(mapStateFeatureKey, mapReducer),
  ],
})
export class MapModule {}
