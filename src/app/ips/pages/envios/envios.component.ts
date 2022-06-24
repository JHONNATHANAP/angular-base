import { Component } from '@angular/core';
import { ModalSelectComponent } from '@app/ips/components/modal-select/modal-select.component';
import { AppTemplateList } from '@app/models/tamplate-list-model';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
  AllControls,
  AppButton,
  AppFormButton,
  AppFormGeneric,
  AppIcon,
  AppList,
  AppListActionType,
  AppModal,
  IAppListAction,
  sharedConts,
} from '@src/shared';
import { AppSnackBar } from '@src/shared/models/snack-bar-model';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { SnackBarService } from '@src/shared/modules/snack-bar/snack.service';
import moment from 'moment';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.scss'],
})
export class EnviosComponent {
  templateList: AppTemplateList = new AppTemplateList();
  view = viewConst;
  constructor(
    public modalService: ModalService,
    public snackService: SnackBarService
  ) {
    this.templateList.actions = ['campaña', 'exportar'];
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
          break;
      }
    });
    this.templateList.actionsEvent().subscribe((data) => {
      console.log(data);
      switch (data.event) {
        case 'newItem':
          console.log(data.event);
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

  inicializarTabla() {
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
    ];
    const fakeList = Array.from(Array(10).keys()).map((e, index) => {
      const types: AppListActionType[] = ['icon', 'button', 'text'];
      const typ = types[index % types.length];

      return {
        plantilla: faker.lorem.word(),
        nombre: faker.name.findName(),
        empresa: faker.company.companyName(),
        tipoContacto: ['Beneficiario', 'trabajadorr'][
          faker.datatype.number({ min: 0, max: 1 })
        ],
        date: moment(faker.date.past()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
        estado: ['Leido', 'Pendiente', 'Recibido', 'Fallido'][
          faker.datatype.number({ min: 0, max: 3 })
        ],
        correo: faker.internet.email(),
        actions: actions,
      };
    });
    this.templateList.list = new AppList({
      headers: [
        { name: 'Plantilla', id: 'plantilla' },
        { name: 'Nombre del contacto', id: 'nombre' },
        { name: 'Empresa', id: 'empresa' },
        { name: 'Tipo de contacto', id: 'tipoContacto' },
        { name: 'Correo', id: 'correo' },
        { name: 'Fecha de envío', id: 'date' },
        { name: 'Estado', id: 'estado' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: false,
    });
  }
  inicializarFiltros() {
    const controls: AllControls[] = [
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre plantilla',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre contacto',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre empresa',
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateInit',
        class: 'col-12 col-md-4',
        label: 'Fecha de envío (Desde)',
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateEnd',
        class: 'col-12 col-md-4',
        label: 'Fecha de envío (Hasta)',
      },
      {
        type: 'select',
        validators: [],
        formControlName: 'status',
        class: 'col-12 col-md-4',
        label: 'Estado',
        options: [
          { value: { id: 1 }, label: 'Leido' },
          { value: { id: 2 }, label: 'Fallido' },
        ],
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
