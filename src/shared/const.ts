import { IAppShared } from './models';

export const forms: IAppShared = {
  framework: 'bootstrap',
  controls: {
    appearance: 'outline',
    input: {
      type: 'text',
    },
    date:{
      outputFormat:'YYYY-MM-DD'
    }
  },
};
