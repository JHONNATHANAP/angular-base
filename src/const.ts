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
  empresasCargue: 'empresas/cargar',
  beneficiarios: 'beneficiarios',
  beneficiariosCargue: 'beneficiarios/cargar',
};
export const views = [
  {
    title: 'Empresas',
    path: `/${routesPath.ips}/${routesPath.empresas}`,
    view: routesPath.empresas,
    children: [
      {
        title: 'Listado',
        path: `/${routesPath.ips}/${routesPath.empresas}`,
        view: routesPath.empresas,
      },
      {
        title: 'Cargues',
        path: `/${routesPath.ips}/${routesPath.empresasCargue}`,
        view: routesPath.empresasCargue,
      },
    ],
  },
  {
    title: 'Beneficiarios',
    path: `/${routesPath.ips}/${routesPath.beneficiarios}`,
    view: routesPath.beneficiarios,
    children: [
      {
        title: 'Listado',
        path: `/${routesPath.ips}/${routesPath.beneficiarios}`,
        view: routesPath.beneficiarios,
      },
      {
        title: 'Cargues',
        path: `/${routesPath.ips}/${routesPath.beneficiariosCargue}`,
        view: routesPath.beneficiariosCargue,
      },
    ],
  },
  {
    title: 'Maling',
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
