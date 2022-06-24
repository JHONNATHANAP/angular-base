import { Component, OnInit } from '@angular/core';
import { ModalAgregarEmpresaComponent } from '@app/ips/components/modal-agregar-empresa/modal-agregar-empresa.component';
import { AppTemplateList } from '@app/models/tamplate-list-model';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
  AllControls,
  AppAutocompleteItems,
  AppFormButton,
  AppFormGeneric,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
} from '@src/shared';
import { AppSnackBar } from '@src/shared/models/snack-bar-model';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { SnackBarService } from '@src/shared/modules/snack-bar/snack.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  templateList: AppTemplateList = new AppTemplateList();
  view = viewConst;
  constructor(
    public modalService: ModalService,
    public snackService: SnackBarService
  ) {
    //this.modalService.openLoading();
    setTimeout(() => {
      //this.modalService.close();
    }, 2000);
  }

  ngOnInit(): void {
    this.initView();
  }
  initView() {
    this.inicializarFiltros();
    this.inicializarTabla();
    this.initListeners();
  }
  initListeners() {
    this.templateList.filtros.form.submitEvent().subscribe((data) => {
      console.log(data);
      const count = faker.datatype.number({ min: 100 });
      setTimeout(() => {
        if (this.templateList.filtros.seleccionados.filtros.length === 0)
          return;
        this.templateList.filtros.seleccionados.filtros[
          this.templateList.filtros.seleccionados.filtros.length - 1
        ].count = count;
        this.templateList.filtros.seleccionados.filtros[
          this.templateList.filtros.seleccionados.filtros.length - 1
        ].total = this.view.text.totalFiltroFormat
          .replace('@count', String(count))
          .replace('@itemLabel', String('empresas'));
        this.templateList.filtros.seleccionados.total = `<p><h5 class="primary">${this.templateList.filtros.seleccionados.filtros
          .map((e) => e.count)
          .reduce((accumulator, curr) => accumulator + curr)}</h5></p>`;
      }, 500);
    });
    this.templateList.list.actionEvent().subscribe((data) => {
      console.log(data);
      switch (data.event.name) {
        case 'edit':
          console.log(data.event);
          this.abrirFormularioItem({});
          break;
      }
    });
    this.templateList.actionsEvent().subscribe((data) => {
      console.log(data);
      switch (data.event) {
        case 'newItem':
          console.log(data.event);
          this.abrirFormularioItem();
          break;
        case 'selectPlantilla':
          console.log(data);
          break;
        case 'exportar':
          console.log(data);
          break;
        case 'saveItem':
          console.log(data);
          this.snackService
            .new(
              new AppSnackBar({
                messaje: 'Se ha guardado con exito',
                class: 'success',
                duration: 2000,
              })
            )
            .open();
          break;
      }
    });
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
        rut: faker.datatype.number({ min: 10000000000 }),
        rutRepresentante: faker.datatype.number({ min: 10000000000 }),
        email: faker.internet.email(),
        actions: actions,
      };
    });
    this.templateList.list = new AppList({
      headers: [
        { name: 'Nombre empresa', id: 'empresa' },
        { name: 'RUT empresa', id: 'rut' },
        { name: 'Email empresa', id: 'email' },
        { name: 'Representante', id: 'representante' },
        { name: 'RUT Representante', id: 'rutRepresentante' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
  }
  abrirFormularioItem(data?: any) {
    this.modalService
      .new(
        new AppModal({
          title: data ? 'Editar empresa' : 'Nueva empresa',
          id: 'newItem',
          data: this.templateList.item.form,
          component: ModalAgregarEmpresaComponent,
        })
      )
      .open();
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
        formControlName: 'confirmoDatos',
        options: [
          { label: 'Sí', value: { value: true, label: 'Sí' } },
          { label: 'No', value: { value: false, label: 'No' } },
        ],
        class: 'col-12 col-md-4',
        label: 'Datos confirmados',
      },
    ];
    this.templateList.filtros.form = new AppFormGeneric({
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
  }
}
