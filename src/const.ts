import { AppButton, AppIcon } from './shared';

export const routesPath = {
  demo: 'demo',
  controls: 'controls',
  home: 'home',
  tables: 'tables',
  typography: 'typography',
  ips: 'ips',
  plantillas: 'plantillas',
  envios: 'envios',
  empresas: 'empresas',
  empresasRegistro: 'empresas/registro',
  causantes: 'causantes',
  causantesRegistro: 'causantes/registro',
  trabajadores: 'trabajadores',
  trabajadoresRegistro: 'trabajadores/registro',
  auth: 'auth',
  login: 'login',
  verificar: 'verificar',
  empresa: 'empresa',
  trabajador: 'trabajador',
  registro: 'registro',
};
export const views = [
  {
    title: 'Registro',
    path: `/${routesPath.ips}/${routesPath.registro}`,
    view: routesPath.registro,
  },
  {
    title: 'Empresas',
    path: `/${routesPath.ips}/${routesPath.empresas}`,
    view: routesPath.empresas,
  },
  {
    title: 'Trabajadores',
    path: `/${routesPath.ips}/${routesPath.trabajadores}`,
    view: routesPath.trabajadores,
  },
  {
    title: 'Causantes',
    path: `/${routesPath.ips}/${routesPath.causantes}`,
    view: routesPath.causantes,
  },
  {
    title: 'Mailing',
    path: `/${routesPath.ips}/${routesPath.plantillas}`,
    view: routesPath.plantillas,
    children: [
      {
        title: 'Plantillas',
        path: `/${routesPath.ips}/${routesPath.plantillas}`,
        view: routesPath.plantillas,
      },
      {
        title: 'Envios',
        path: `/${routesPath.ips}/${routesPath.envios}`,
        view: routesPath.envios,
      },
    ],
  },
];
/* export const views = [
  {
    title: 'Empresas',
    path: `/${routesPath.ips}/${routesPath.empresas}`,
    view: routesPath.empresas,
    children: [
      {
        title: 'Registro',
        path: `/${routesPath.ips}/${routesPath.empresasRegistro}`,
        view: routesPath.empresasRegistro,
      },
      {
        title: 'Listado',
        path: `/${routesPath.ips}/${routesPath.empresas}`,
        view: routesPath.empresas,
      },
    ],
  },
  {
    title: 'Trabajadores',
    path: `/${routesPath.ips}/${routesPath.trabajadores}`,
    view: routesPath.trabajadores,
    children: [
      {
        title: 'Registro',
        path: `/${routesPath.ips}/${routesPath.trabajadoresRegistro}`,
        view: routesPath.trabajadoresRegistro,
      },
      {
        title: 'Listado',
        path: `/${routesPath.ips}/${routesPath.trabajadores}`,
        view: routesPath.trabajadores,
      },
    ],
  },
  {
    title: 'Causantes',
    path: `/${routesPath.ips}/${routesPath.causantes}`,
    view: routesPath.trabajadores,
    children: [
      {
        title: 'Registro',
        path: `/${routesPath.ips}/${routesPath.causantesRegistro}`,
        view: routesPath.causantesRegistro,
      },
      {
        title: 'Listado',
        path: `/${routesPath.ips}/${routesPath.causantes}`,
        view: routesPath.causantes,
      },
    ],
  },
  {
    title: 'Mailing',
    path: `/${routesPath.ips}/${routesPath.plantillas}`,
    view: routesPath.plantillas,
    children: [
      {
        title: 'Plantillas',
        path: `/${routesPath.ips}/${routesPath.plantillas}`,
        view: routesPath.plantillas,
      },
      {
        title: 'Envios',
        path: `/${routesPath.ips}/${routesPath.envios}`,
        view: routesPath.envios,
      },
    ],
  },
]; */

export const viewConst = {
  buttons: {
    cargar: new AppButton({
      color: 'primary',
      framework: 'material',
      class: 'btn',
    }),
    exportar: new AppButton({
      color: 'primary',
      framework: 'material',
      class: 'btn',
    }),
    add: new AppButton({
      color: 'primary',
      framework: 'material',
      class: '',
    }),
  },
  icons: {
    upload: new AppIcon({ class: 'upload' }),
    download: new AppIcon({ class: 'download' }),
    check: new AppIcon({ class: 'check' }),
    email: new AppIcon({ class: 'email' }),
    add: new AppIcon({ class: 'add' }),
  },
  text: {
    busquedaAvanzada: '<h5 class="py-2 primary-dark">Búsqueda avanzada</h5>',
    agregarFiltros: '<h5 class="py-2 primary-dark">Agregar filtros</h5>',
    filtrosAgregados:
      '<h5 class="py-2 primary-dark">Filtros seleccionados</h5>',
    totalFiltroFormat: '<p class="m-0"><b>@count </b> ' + ' @itemLabel</p>',
  },
};
