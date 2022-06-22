import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import {
  AllControls,
  AppFormButton,
  AppFormGeneric,
  sharedConts,
} from '@src/shared';
import { AppSnackBar } from '@src/shared/models/snack-bar-model';
import { SnackBarService } from '@src/shared/modules/snack-bar/snack.service';
import moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: AppFormGeneric;
  controls: AllControls[];
  constructor(
    private router: Router,
    private snackBarService: SnackBarService
  ) {
    this.controls = [
      {
        type: 'text',
        validators: [Validators.required],
        formControlName: 'user',
        class: 'col-12',
        label: 'Usuario',
        value: 'IPS',
      },
      {
        type: 'password',
        validators: [Validators.required],
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
    this.form.submitEvent().subscribe((data) => {
      if (data.user === 'IPS') {
        this.router.navigate(['/ips/empresas']);
      } else if (data.user === 'Empresa') {
        this.router.navigate(['/verificar/empresa']);
      } else if (data.user === 'Trabajador') {
        this.router.navigate(['/verificar/trabajador']);
      } else {
        this.snackBarService
          .new(
            new AppSnackBar({
              messaje: 'Usuarios validos: IPS,Empresa,Trabajador',
              class: 'secondary',
              duration: 3000,
            })
          )
          .open();
      }
    });
  }
}
