import { Component, Input } from '@angular/core';
import { AppTemplateList } from '@app/models/tamplate-list-model';
import { faker } from '@faker-js/faker';
import { viewConst } from '@src/const';
import {
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
import { ModalSelectComponent } from '../modal-select/modal-select.component';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent {
  @Input() properties: AppTemplateList = new AppTemplateList();

  panelAgregar: AppExpansionPanel = new AppExpansionPanel({
    title: viewConst.text.agregarFiltros,
    class: 'my-2',
  });
  panelAgregados: AppExpansionPanel = new AppExpansionPanel({
    title: viewConst.text.filtrosAgregados,
    class: 'my-2',
  });
  view = viewConst;
  constructor(
    public modalService: ModalService,
    public snackService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.initView();
  }
  initView() {
    this.properties.filtros.form.submitEvent().subscribe((data) => {
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
      this.properties.filtros.seleccionados.filtros.push({
        filtros: filtros,
        check: new AppInput({ value: true, type: 'checkbox' }),
        total: '',
        count: 0,
      });

      this.properties.filtros.form.cleanForm();
    });
    this.modalService.closeEvent().subscribe((data) => {
      switch (data.id) {
        case 'newItem':
          this.properties.subActions.next({
            event: 'saveItem',
            data: data.data,
          });
          break;
      }
    });
  }
  mapearFIltros() {
    return this.properties.filtros.form.controls
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

  abrirFormularioItem(data?: any) {
    this.properties.subActions.next({ event: 'newItem' });
  }

  exportar() {
    this.properties.subActions.next({
      event: 'exportar',
    });
  }
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
      this.properties.subActions.next({
        event: 'selectPlantilla',
        data: data.item,
      });
      this.modalService.close();
    });
    const modald = this.modalService
      .new(
        new AppModal({
          title: 'Seleccionar plantilla',
          id: 'selectPlantilla',
          data: { form: searchForm, list: list },
          component: ModalSelectComponent,
        })
      )
      .open();
  }
}
