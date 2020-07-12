import { createAction, props } from '@ngrx/store';
import { BikeLoginPayload, BikeRegisterPayload, BikeUserInfo } from '../../backend';

export class UserActions {

  static loginUser = createAction(
    '[User] login user',
    props<{payload: BikeLoginPayload}>()
  );

  static registerUser = createAction(
    '[User] register user',
    props<{payload: BikeRegisterPayload}>()
  )

  static updateUser = createAction(
    '[User] update user',
    props<{user: BikeUserInfo}>()
  );


}
