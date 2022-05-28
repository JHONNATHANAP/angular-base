import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppButton } from '../../../models/button-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() properties: AppButton;
  constructor() {
    this.properties=new AppButton();
  }


  private propagateClick: any = () => {};
  emitClick(event: MouseEvent): void{
    this.propagateClick();
    this.clickEvent.emit(this.properties?.data);
  }
}
