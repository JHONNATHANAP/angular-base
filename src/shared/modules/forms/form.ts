import { AppFormControl } from "../../models";



export const markFormGroupTouched = (formGroup: any) => {
  (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if(control.controls){
        markFormGroupTouched(control);
      }

  })
}
export const markFormGroupUnTouched = (formGroup: any) => {
  (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.touched=false;

      if(control.controls){
        markFormGroupUnTouched(control);
      }

  })
}

export interface Control {
  items? : AppFormControl[];
  changed? : () => void;
  map?: (() => void) | any;
}

export interface ControlEntities {
  [key: string] : Control;
}

export const  mapControls = (controls: ControlEntities) : void => {
  Object.keys(controls).forEach( (key:string) => {
    if(controls[key].map){
      controls[key].map();
    }
  })
}