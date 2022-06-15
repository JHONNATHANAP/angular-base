import { Component, OnInit } from '@angular/core';
import { ModalAgregarEmpresaComponent } from '@app/ips/components/modal-agregar-empresa/modal-agregar-empresa.component';
import { ModalSelectComponent } from '@app/ips/components/modal-select/modal-select.component';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
  AllControls,
  AppFormButton,
  AppFormGeneric,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
  sharedConts,
} from '@src/shared';
import { AppExpansionPanel } from '@src/shared/models/expansion-panel-model';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  list: AppList = new AppList();
  panel: AppExpansionPanel = new AppExpansionPanel({
    title: viewConst.text.busquedaAvanzada,
    class: 'border-none',
  });
  formFiltros: AppFormGeneric = new AppFormGeneric();
  formEmpresa: AppFormGeneric = new AppFormGeneric();
  view = viewConst;
  constructor(public modalService: ModalService) {
    this.modalService.closeEvent().subscribe((modalData: any) => {
      console.log(modalData.data);
    });
  }
  ngOnInit(): void {
    this.initView();
  }
  initView() {
    this.inicializarFiltros();
    this.inicializarTabla();
  }
  inicializarFiltros(): void {
    const controls: AllControls[] = [
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre empresa',
        value: faker.name.firstName(),
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'lastname',
        class: 'col-12 col-md-4',
        label: 'Nombre representante',
        value: faker.name.lastName(),
      },
      {
        type: 'number',
        validators: [],
        formControlName: 'edad',
        class: 'col-12 col-md-4',
        label: 'RUT',
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
        type: 'text',
        validators: [],
        formControlName: 'region',
        class: 'col-12 col-md-4',
        label: 'Región',
        value: faker.internet.email(),
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'date',
        class: 'col-12 col-md-4',
        label: 'Fecha de registro',
        value: moment(faker.date.recent()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'correoEnviado',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Correo enviado',
        value: faker.datatype.boolean(),
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'correoRecibido',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Correo recibido',
        value: false,
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'correoAbierto',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Correo abierto',
        value: faker.datatype.boolean(),
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'correoRechazado',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Correo rechazado',
        value: true,
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'correoRechazado',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Tiene número de telefono',
        value: true,
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'datosCompletos',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Trabajadores con datos completos',
        value: true,
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'cargasFamiliares',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Trabajadores con cargas familiares',
        value: true,
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'cargasFamiliares',
        options: [
          { label: 'Sí', value: true },
          { label: 'No', value: false },
        ],
        class: 'col-12 col-md-4',
        label: 'Empresa confirmo datos',
        value: true,
      },
    ];
    this.formFiltros = new AppFormGeneric({
      controls: controls,
      updateOn: 'change',
      clean: new AppFormButton({
        label: 'Limpiar',
        show: true,
        type: 'button',
        class: 'btn',
        color: '',
        framework: 'material',
      }),
      submit: new AppFormButton({
        label: 'Filtrar',
        show: true,
        type: 'button',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
  }
  inicializarTabla(): void {
    const actions: IAppListAction[] = [
      {
        label: 'Editar',
        name: 'edit',
        type: 'icon',
        icon: { class: 'edit', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
      {
        label: 'Eliminar',
        name: 'delete',
        type: 'icon',
        icon: { class: 'delete', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
    ];
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        id: faker.name.firstName(),
        empresa: faker.company.companyName(),
        representante: faker.name.findName(),
        identificaion: faker.datatype.number({ min: 10000000000 }),
        email: faker.internet.email(),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre empresa', id: 'empresa' },
        { name: 'Representante', id: 'representante' },
        { name: 'Identificación', id: 'identificaion' },
        { name: 'Contacto', id: 'email' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    this.list.actionEvent().subscribe((data) => {
      console.log(data);

      this.abrirFormularioEmpresa({});
    });
  }
  abrirFormularioEmpresa(data?: any) {
    this.modalService
      .new(
        new AppModal({
          title: data ? 'Editar empresa' : 'Nueva empresa',
          data: this.formEmpresa,
          component: ModalAgregarEmpresaComponent,
        })
      )
      .open();
  }
  onFilesChanged(event) {
    console.log(event);
  }
  exportar() {}
  aprobarTodos() {}
  aprobarRegistro() {}
  enviarCorreo() {
    const searchForm = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          formControlName: 'search',
          label: 'Buscar plantilla',
          class: 'col-12',
          validators: [],
          value: faker.lorem.word(),
        },
      ],
      updateOn: 'change',
      class: 'p-1',
      clean: new AppFormButton({
        show: false,
      }),
      submit: new AppFormButton({
        show: false,
      }),
    });
    searchForm.changeEvent().subscribe((data) => {
      console.log(searchForm.controls[0].value);
    });
    const actions: IAppListAction[] = [
      {
        label: 'Seleccionar',
        name: 'select',
        type: 'icon',
        icon: { class: 'check', type: 'button' },
        button: {
          data: '',
          framework: 'material',
          color: '',
        },
      },
    ];
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        plantilla: faker.lorem.word(),
        descripcion: faker.lorem.sentence(),
        actions: actions,
      };
    });
    const list = new AppList({
      headers: [
        { name: 'Nombre plantilla', id: 'plantilla' },
        { name: 'Descripción', id: 'descripcion' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
    list.actionEvent().subscribe((data) => {
      console.log(data);
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Seleccionar plantilla',
          data: { form: searchForm, list: list },
          component: ModalSelectComponent,
        })
      )
      .open()
      .closeEvent()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
