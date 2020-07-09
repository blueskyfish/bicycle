import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bike-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeat: new FormControl('', [Validators.required, Validators.minLength(8)]),
    accessCode: new FormControl('', Validators.required),
    term: new FormControl(false, Validators.requiredTrue),
  });

  constructor() { }

  ngOnInit(): void {
  }

  register(): void {
    const payload = this.registerForm.value;

    console.log('> debug: register =>', payload);
  }
}
