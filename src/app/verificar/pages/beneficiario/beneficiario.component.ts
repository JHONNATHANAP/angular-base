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
    nombre: { label: 'Nombre', value: faker.company.companyName() },
    rut: {
      label: 'Identificación',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    email: { label: 'Email', value: faker.internet.email() },
    telefono: {
      label: 'Telefono',
      value: faker.datatype.number({ min: 1111111111111 }),
    },
    direccion: { label: 'Dirección', value: faker.address.streetAddress() },
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
    const editForm: AppFormGeneric = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          validators: [],
          formControlName: 'name',
          class: 'col-12 col-md-4',
          label: 'Nombre',
          value: faker.name.firstName(),
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'lastname',
          class: 'col-12 col-md-4',
          label: 'Apellido',
          value: faker.name.lastName(),
        },
        {
          type: 'select',
          validators: [],
          formControlName: 'documentType',
          class: 'col-12 col-md-4',
          label: 'Tipo de documento',
          value: { id: 2 },
          options: [
            { value: { id: 1 }, label: 'CC' },
            { value: { id: 2 }, label: 'DD' },
          ],
        },
        {
          type: 'number',
          validators: [],
          formControlName: 'edad',
          class: 'col-12 col-md-4',
          label: 'Indetifiación',
          value: 28,
        },
        {
          type: 'text',
          validators: [],
          formControlName: 'email',
          class: 'col-12 col-md-4',
          label: 'Correo',
          value: faker.internet.email(),
        },
        {
          type: 'date',
          validators: [],
          formControlName: 'date',
          class: 'col-12 col-md-4',
          label: 'Fecha Nacimiento',
          value: moment(faker.date.recent()).format(
            sharedConts.forms.controls.date.outputFormat
          ),
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        label: 'Cancelar',
        show: true,
        type: 'button',
        class: 'btn',
        color: '',
        framework: 'material',
      }),
      submit: new AppFormButton({
        label: 'Guardar',
        show: true,
        type: 'submit',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Editar información',
          data: editForm,
          component: ModalAgregarBeneficiarioComponent,
        })
      )
      .open();
    editForm.submitEvent().subscribe((data) => {
      console.log(data);
      modald.close();
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
