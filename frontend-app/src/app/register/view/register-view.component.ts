import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BikeRegisterPayload } from '../../backend';
import { Util } from '../../common/util';
import { buildErrorCode, ErrorActions, ErrorSelectors } from '../../store/error';
import { StoreState } from '../../store/store.state';
import { UserActions } from '../../store/user/user.actions';

@UntilDestroy()
@Component({
  selector: 'bike-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  // Until destroy
  lastError$: Subscription;

  /**
   * The error code translation key or `null`.
   */
  errorCode: string = null;

  /**
   * Error id or null.
   */
  errorId: number;

  /**
   * The form for the registration
   */
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeat: new FormControl('', [Validators.required, Validators.minLength(8)]),
    accessCode: new FormControl('', [Validators.required, Validators.minLength(1)]),
    term: new FormControl(false, Validators.requiredTrue),
  });

  constructor(private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.lastError$ = this.store
      .pipe(
        select(ErrorSelectors.getLastError),
      )
      .subscribe((err) => {
        // console.log('> debug: Error =>', err);
        this.errorId = Util.notNil(err) ? err.id : null;
        this.errorCode = buildErrorCode(err);
      });
  }

  register(): void {

    const payload: BikeRegisterPayload = this.registerForm.value;
    if ((payload as any).term) {
      delete (payload as any).term;
    }

    this.store.dispatch(UserActions.registerUser({payload}));
  }

  removeError(): void {
    if (Util.notNil(this.errorId)) {
      this.store.dispatch(ErrorActions.removeError({ id: this.errorId }));
    }
  }
}
