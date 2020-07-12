import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BikeLoginPayload } from '../../backend';
import { Util } from '../../common/util';
import { ErrorActions, ErrorSelectors } from '../../store/error';
import { StoreState } from '../../store/store.state';
import { UserActions } from '../../store/user/user.actions';

@UntilDestroy()
@Component({
  selector: 'bike-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

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

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private store: Store<StoreState>) {
  }

  ngOnInit(): void {
    this.lastError$ = this.store
      .pipe(
        select(ErrorSelectors.getLastError),
      )
      .subscribe((err) => {
        // console.log('> debug: Error =>', err);
        this.errorId = Util.notNil(err) ? err.id : null;
        this.errorCode = Util.notNil(err) ? ['app.error', err.group, err.code].join('.') : null;
      });
  }

  login(): void {
    const payload: BikeLoginPayload = this.loginForm.value;
    this.store.dispatch(UserActions.loginUser({ payload }));
  }

  removeError(): void {
    if (Util.notNil(this.errorId)) {
      this.store.dispatch(ErrorActions.removeError({ id: this.errorId }));
    }
  }
}
