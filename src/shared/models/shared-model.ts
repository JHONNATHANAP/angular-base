import { AppControlAppearance, Appframework, FormControlType } from '.';

export interface IAppShared {
  framework: Appframework;
  paginator:{
    itemsPerPage:{
      label:string
    },
    page: {
      label: string,
    },
    next: {
      label: string,
    },
    previous: {
      label: string,
    },
  },
  controls: {
    appearance: AppControlAppearance;
    input: {
      type: FormControlType;
    },
    date:{
      outputFormat:string
    }
  };
}
