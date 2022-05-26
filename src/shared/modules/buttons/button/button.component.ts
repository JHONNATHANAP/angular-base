import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ButtonProperties } from '../../../models/buttons-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() properties: ButtonProperties;
  constructor() {
    this.properties={
      type:'button',
      class:'btn-primary',
      data:null
    }
  }


  private propagateClick: any = () => {};
  emitClick(event: MouseEvent): void{
    this.propagateClick();
    this.clickEvent.emit(this.properties.data);
  }
}
