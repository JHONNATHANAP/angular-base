import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  FormBuilder, FormGroup,
  NgForm
} from '@angular/forms';
import { AppFormGeneric } from '@src/shared';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-generic',
  templateUrl: './form-generic.component.html',
  styleUrls: ['./form-generic.component.scss'],
})
export class FormGenericComponent implements  OnDestroy {
 
  @Input() properties: AppFormGeneric;
  constructor(private fb: FormBuilder) {
    this.properties = new AppFormGeneric();
  }
  private destroy = new Subject<any>();

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
