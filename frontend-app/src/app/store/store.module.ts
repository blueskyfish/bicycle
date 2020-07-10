import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouteEffectService } from './route/route.effects';
import { UserEffectService } from './user/user.effects';
import * as fromStore from './store.reducer';

const effectServices: any[] = [
  RouteEffectService,
  UserEffectService,
];

@NgModule({
  imports: [
    StoreModule.forRoot(fromStore.reducer, {
      initialState: fromStore.initial,
    }),
    EffectsModule.forRoot(effectServices),
  ],
  providers: [
    RouteEffectService,
    UserEffectService,
  ]
})
export class BikeStoreModule {

}
