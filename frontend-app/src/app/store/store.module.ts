import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffectService } from './user/user.effects';
import * as fromStore from './store.reducer';

const effectServices: any[] = [
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
    UserEffectService,
  ]
})
export class BikeStoreModule {

}
