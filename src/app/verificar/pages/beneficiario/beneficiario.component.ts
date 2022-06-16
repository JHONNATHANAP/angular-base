import { Component, OnInit } from '@angular/core';
import { ModalAgregarBeneficiarioComponent } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.component';
import { faker } from '@faker-js/faker';
import {
  AppButton,
  AppFormButton,
  AppFormGeneric,
  AppIcon,
  AppModal,
  sharedConts,
} from '@src/shared';
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss'],
})
export class BeneficiarioComponent {
  beneficiario = {
    dv: {
      label: 'DV',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    run: {
      label: 'RUN',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    nombre: { label: 'Nombre', value: faker.name.findName() },
    fecha: {
      label: 'Fecha nacimiento',
      value: moment(faker.date.past()).format(
        sharedConts.forms.controls.date.outputFormat
      ),
    },
    sexo: { label: 'Sexo', value: 'Masculino' },
    comuna: { label: 'Comuna', value: faker.address.streetAddress() },
    region: { label: 'Región', value: faker.address.streetAddress() },
    retencion: { label: 'Tiene retención', value: 'Si' },
    retencionAprobada: { label: 'Tiene retención aprobada', value: 'Si' },
    direccion: { label: 'Dirección', value: faker.address.streetAddress() },

    telefono: {
      label: 'Telefono',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    celular: {
      label: 'Celular',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    email: { label: 'Email', value: faker.internet.email() },
  };
  view = {
    buttons: {
      edit: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
      aprobar: new AppButton({
        color: 'primary',
        framework: 'material',
        class: 'btn',
      }),
    },
    icons: {
      edit: new AppIcon({ class: 'edit' }),
      add: new AppIcon({ class: 'add' }),
    },
  };
  constructor(public modalService: ModalService) {}

  editarBeneficiario() {
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Editar información',
          data: {},
          component: ModalAgregarBeneficiarioComponent,
        })
      )
      .open();
    modald.closeEvent().subscribe((data) => {
      console.log(data);
    });
  }
  datosBeneficiario() {
    return Array.from(Object.keys(this.beneficiario)).map((e) => {
      return {
        key: this.beneficiario[e].label,
        value: this.beneficiario[e].value,
      };
    });
  }
}
