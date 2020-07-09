import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { BikeLoginPayload } from '../../backend';
import { User } from '../../store/service/user/user-actions';

@Component({
  selector: 'bike-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  login(): void {
    const payload: BikeLoginPayload = this.loginForm.value;
    this.store.dispatch(new User.Login(payload));
  }
}
