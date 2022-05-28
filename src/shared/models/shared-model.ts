import { AppControlAppearance, Appframework, FormControlType } from '.';

export interface IAppShared {
  framework: Appframework;
  controls: {
    appearance: AppControlAppearance;
    input: {
      type: FormControlType;
    };
  };
}
