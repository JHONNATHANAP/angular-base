import { IAppShared } from './models';

export const forms: IAppShared = {
  framework: 'material',
  paginator: {
    itemsPerPage: {
      label: 'Registros por página',
    },
    page: {
      label: 'Página',
    },
    next: {
      label: 'Página siguiente',
    },
    previous: {
      label: 'Página anterior',
    },
  },
  controls: {
    appearance: 'outline',
    input: {
      type: 'text',
    },
    date: {
      outputFormat: 'YYYY-MM-DD',
    },
  },
};
