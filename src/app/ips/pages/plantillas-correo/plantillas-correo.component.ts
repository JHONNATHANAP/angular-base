import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalAgregarPlantillaComponent } from '@app/ips/components/modal-agregar-plantilla/modal-agregar-plantilla.component';
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
import { ModalFormComponent } from '@src/shared/modules/modals/modal-form/modal-form.component';
import { ModalService } from '@src/shared/modules/modals/modal.service';
import { SnackBarService } from '@src/shared/modules/snack-bar/snack.service';
import moment from 'moment';

@Component({
  selector: 'app-plantillas-correo',
  templateUrl: './plantillas-correo.component.html',
  styleUrls: ['./plantillas-correo.component.scss'],
})
export class PlantillasCorreoComponent {
  templateList: AppTemplateList = new AppTemplateList();
  view = viewConst;

  constructor(
    public modalService: ModalService,
    public snackService: SnackBarService
  ) {
    this.templateList.actions = ['exportar', 'agregar'];
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
          this.openEditModal('Editar plantilla');
          break;
      }
    });
    this.templateList.actionsEvent().subscribe((data) => {
      console.log(data);
      switch (data.event) {
        case 'newItem':
          console.log(data.event);
          this.openEditModal('Agregar plantilla');
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
  openEditModal(title?: string) {
    const form = new AppFormGeneric({
      controls: [
        {
          type: 'text',
          validators: [Validators.required],
          formControlName: 'name',
          class: 'col-12',
          label: 'Nombre de plantilla',
          value: faker.lorem.word(),
        },
        {
          type: 'textarea',
          validators: [Validators.required],
          formControlName: 'description',
          class: 'col-12',
          label: 'Descripción',
          rows: 3,
          value: faker.lorem.paragraphs(),
        },
        {
          type: 'textarea',
          validators: [Validators.required],
          formControlName: 'plantilla',
          class: 'col-12',
          rows: 3,
          label: 'Plantilla',
          value:
            '<h1>APORTE FAMILIAR PERMANENTE 2022</h1></br><h2>GRUPO 1</h2><p>Personas que la segunda mitad de cada mes cobran beneficios por Subsidio Familiar, Chile Solidario o por el Subsistema de Seguridades y Oportunidades (Ingreso Ético Familiar) a través del IPS.</p>',
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
          title: title,
          id: 'newItem',
          data: form,
          component: ModalAgregarPlantillaComponent,
        })
      )
      .open();
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
      {
        label: 'Descargar',
        name: 'download',
        type: 'icon',
        icon: { class: 'download', type: 'button' },
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
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        date: moment(faker.date.past()).format(
          sharedConts.forms.controls.date.outputFormat
        ),
        actions: actions,
      };
    });
    this.templateList.list = new AppList({
      headers: [
        { name: 'Nombre plantilla', id: 'name' },
        { name: 'Descripción', id: 'description' },
        { name: 'Fecha de cargue', id: 'date' },
      ],
      data: fakeList,
      class: 'table align-middle table-striped table-hover',
      actions: true,
    });
  }

  inicializarFiltros() {
    const controls: AllControls[] = [
      {
        type: 'text',
        validators: [],
        formControlName: 'name',
        class: 'col-12 col-md-4',
        label: 'Nombre de plantilla',
      },
      {
        type: 'text',
        validators: [],
        formControlName: 'description',
        class: 'col-12 col-md-4',
        label: 'Descripción',
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateInit',
        class: 'col-12 col-md-4',
        label: 'Fecha de cargue (Desde)',
      },
      {
        type: 'date',
        validators: [],
        formControlName: 'dateEnd',
        class: 'col-12 col-md-4',
        label: 'Fecha de cargue (Hasta)',
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
