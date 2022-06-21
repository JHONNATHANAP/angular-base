import { Component } from '@angular/core';
import { ModalAgregarBeneficiarioComponent } from '@app/ips/components/modal-agregar-beneficiario/modal-agregar-beneficiario.component';
import { ModalSelectComponent } from '@app/ips/components/modal-select/modal-select.component';
import { AppFiltrosSeleccionados } from '@app/models';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
  AllControls,
  AppAutocompleteItems,
  AppAutoCompleteOption,
  AppFormButton,
  AppFormGeneric,
  AppInput,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
} from '@src/shared';
import { AppExpansionPanel } from '@src/shared/models/expansion-panel-model';
import { AppSnackBar } from '@src/shared/models/snack-bar-model';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { SnackBarService } from '@src/shared/modules/snack-bar/snack.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.scss'],
})
export class TrabajadoresComponent {
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
  constructor(
    public modalService: ModalService,
    public snackService: SnackBarService
  ) {
    this.modalService.closeEvent().subscribe((modalData: any) => {
      console.log(modalData.data);
      this.snackService
        .new(
          new AppSnackBar({
            messaje: 'Se ha guardado con exito',
            class: 'success',
            duration: 2000,
          })
        )
        .open();
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
        rut: faker.datatype.number({ min: 10000000000 }),
        rutEmpresa: faker.datatype.number({ min: 10000000000 }),
        nombre: faker.datatype.number({ min: 10000000000 }),
        email: faker.internet.email(),
        actions: actions,
      };
    });
    this.list = new AppList({
      headers: [
        { name: 'Nombre', id: 'nombre' },
        { name: 'RUT', id: 'rut' },
        { name: 'Email', id: 'email' },
        { name: 'Nombre empresa', id: 'empresa' },
        { name: 'RUT empresa', id: 'rutEmpresa' },
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
          title: data ? 'Editar beneficiario' : 'Nuevo beneficiario',
          data: this.formEmpresa,
          component: ModalAgregarBeneficiarioComponent,
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
      class: 'p-1 w-100',
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
        label: 'Nombre beneficiario',
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
        type: 'date',
        validators: [],
        formControlName: 'date',
        class: 'col-12 col-md-4',
        label: 'Fecha de registro',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'tieneCorreo',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Tiene correo registrado',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'tieneTelefono',
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
        formControlName: 'tieneRetencion',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Tiene retención judicial',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'confirmoDatos',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Datos confirmados',
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
        this.snackService
          .new(
            new AppSnackBar({
              messaje: 'Debe ingresar al menos un filtro',
              class: 'secondary',
              duration: 3000,
            })
          )
          .open();
        return;
      }
      const count = faker.datatype.number({ min: 100 });
      this.filtrosSeleccionados.filtros.push({
        filtros: filtros,
        check: new AppInput({ value: true, type: 'checkbox' }),
        total: this.view.text.totalFiltroFormat
          .replace('@count', String(count))
          .replace('@itemLabel', String('beneficiarios')),
        count: count,
      });
      this.filtrosSeleccionados.total = `<p><h5 class="primary">${this.filtrosSeleccionados.filtros
        .map((e) => e.count)
        .reduce((accumulator, curr) => accumulator + curr)}</h5></p>`;
      this.formFiltros.cleanForm();
    });
  }
}
