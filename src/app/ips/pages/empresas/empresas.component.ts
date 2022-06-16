import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalAgregarEmpresaComponent } from '@app/ips/components/modal-agregar-empresa/modal-agregar-empresa.component';
import { ModalSelectComponent } from '@app/ips/components/modal-select/modal-select.component';
import { AppFiltrosSeleccionados } from '@app/models';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
  AllControls,
  AppAutoCompleteOption,
  AppAutocompleteItems,
  AppFormButton,
  AppFormGeneric,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
  sharedConts,
  AppInput,
} from '@src/shared';
import { AppExpansionPanel } from '@src/shared/models/expansion-panel-model';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import moment from 'moment';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  list: AppList = new AppList();
  panelAgregar: AppExpansionPanel = new AppExpansionPanel({
    title: viewConst.text.agregarFiltros,
    class: 'my-2',
  });
  panelAgregados: AppExpansionPanel = new AppExpansionPanel({
    title: viewConst.text.filtrosAgregados,
    class: 'my-2',
  });
  formFiltros: AppFormGeneric = new AppFormGeneric();
  formEmpresa: AppFormGeneric = new AppFormGeneric();
  view = viewConst;
  itemsAutoComplete: AppAutoCompleteOption[] = [];
  filtrosSeleccionados: AppFiltrosSeleccionados = new AppFiltrosSeleccionados();
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
  fakeNomina() {
    return Array.from(Array(5).keys()).map((e, index) => {
      const label = 'Nómina ' + faker.datatype.number();
      return {
        label: label,
        value: {
          id: faker.datatype.number({ min: 10000000000 }),
          label: label,
        },
      };
    });
  }
  fakeFiltrosSeleccionados() {
    const filtros = Array.from(Array(5).keys()).map((e, index) => {
      const count = faker.datatype.number({ min: 20 });
      return {
        check: new AppInput({
          value: faker.datatype.boolean(),
          type: 'checkbox',
        }),
        total: '<p class="m-0"><b>' + count + ' </b> ' + ' registros</p>',
        filtros: [
          { title: faker.lorem.word(), label: faker.lorem.word() },
          { title: faker.lorem.word(), label: faker.lorem.word() },
          { labtitleel: faker.lorem.word(), label: faker.lorem.word() },
          { title: faker.lorem.word(), label: faker.lorem.word() },
        ],
        count: count,
      };
    });
    this.filtrosSeleccionados = {
      filtros: filtros,
      total: `<p><h5 class="primary">${filtros
        .map((e) => e.count)
        .reduce((accumulator, curr) => accumulator + curr)}</h5></p>`,
    };
  }
  fakeEstadosCorreo() {
    return [
      {
        label: 'Correo enviado',
        value: {
          id: faker.datatype.number({ min: 10000000000 }),
          label: 'Correo enviado',
        },
      },
      {
        label: 'Correo recibido',
        value: {
          id: faker.datatype.number({ min: 10000000000 }),
          label: 'Correo recibido',
        },
      },
      {
        label: 'Correo abierto',
        value: {
          id: faker.datatype.number({ min: 10000000000 }),
          label: 'Correo abierto',
        },
      },
      {
        label: 'Correo rechazado',
        value: {
          id: faker.datatype.number({ min: 10000000000 }),
          label: 'Correo rechazado',
        },
      },
    ];
  }
  inicializarFiltros(): void {
    const autoNomina = new AppAutocompleteItems(this.fakeNomina());
    autoNomina.onSearch().subscribe((data) => {
      console.log(data);
      autoNomina.items = this.fakeNomina();
    });
    const autoCorreoEstado = new AppAutocompleteItems(this.fakeEstadosCorreo());
    autoCorreoEstado.onSearch().subscribe((data) => {
      console.log(data);
      autoCorreoEstado.items = this.fakeEstadosCorreo();
    });
    const controls: AllControls[] = [
      {
        type: 'autocomplete',
        validators: [],
        chipType: 'text',
        formControlName: 'nominas',
        placeholder: 'Buscar nomina',
        items: autoNomina,
        class: 'col-12 col-md-6',
        label: 'Nómina',
        value: [],
        multiple: true,
      },
      {
        type: 'autocomplete',
        validators: [],
        formControlName: 'correoEstado',
        items: autoCorreoEstado,
        class: 'col-12 col-md-6',
        label: 'Estados de envio',
        placeholder: 'Seleccionar estados',
        value: [],
        searchable: false,
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre empresa',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'lastname',
        class: 'col-12 col-md-4',
        label: 'Nombre representante',
      },
      {
        type: 'number',
        validators: [],
        formControlName: 'edad',
        class: 'col-12 col-md-4',
        label: 'RUT',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'email',
        class: 'col-12 col-md-4',
        label: 'Correo',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'region',
        class: 'col-12 col-md-4',
        label: 'Región',
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'date',
        class: 'col-12 col-md-4',
        label: 'Fecha de registro',
       
      },

      {
        type: 'select',
        validators: [],
        formControlName: 'correoRechazado',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Tiene número de telefono',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'datosCompletos',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Trabajadores con datos completos',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'cargasFamiliares',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Trabajadores con cargas familiares',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'cargasFamiliares',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Empresa confirmo datos',
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
        label: 'Agregar',
        show: true,
        type: 'submit',
        class: 'btn ',
        color: 'primary',
        framework: 'material',
      }),
    });
    this.formFiltros.submitEvent().subscribe((data) => {
      console.log(data, this.formFiltros);
      const filtros = this.mapearFIltros();
      if (filtros.length === 0) {
        return;
      }
      this.filtrosSeleccionados.filtros.push({
        filtros: filtros,
        check: new AppInput({ value: true, type: 'checkbox' }),
      });
    });
  }
  mapearFIltros() {
    return this.formFiltros.controls
      .map((control) => {
        const title = control.label;
        let value = control.value;
        let label: string = '';
        switch (typeof control.value) {
          case 'object':
            if (Array.isArray(control.value)) {
              label = control.value
                .map((e) => {
                  return e.label;
                })
                .toString();
            } else {
              label = control.value?.label;
            }
            break;
          default:
            label = String(control.value);
        }
        return {
          title: title,
          value: value,
          label: label,
          typeof: typeof control.value,
        };
      })
      .filter((data) => {
        return data.label && data.label !== '';
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
