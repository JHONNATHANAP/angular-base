import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import {
  AllControls,
  AppFormButton,
  AppFormGeneric,
  sharedConts,
} from '@src/shared';
import moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: AppFormGeneric;
  controls: AllControls[];
  constructor(private router: Router,) {
    this.controls = [
      {
        type: 'text',
        validators: [],
        formControlName: 'user',
        class: 'col-12',
        label: 'Usuario',
        value: faker.name.firstName(),
      },
      {
        type: 'password',
        validators: [],
        formControlName: 'password',
        class: 'col-12',
        label: 'Contraseña',
        value: faker.name.lastName(),
      },
    ];
    this.form = new AppFormGeneric({
      controls: this.controls,
      updateOn: 'change',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        label: 'Iniciar sesión',
        show: true,
        type: 'submit',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
    this.form.submitEvent().subscribe((data)=>{
      this.router.navigate(['/ips/empresas']);
    })
  }
}
