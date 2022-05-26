import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ButtonProperties } from '../../../models/buttons-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() properties: ButtonProperties;
  constructor() {
    this.properties={
      type:'button',
      class:'btn-primary',
      data:null
    }
  }

  ngOnInit(): void {}

  private propagateClick: any = () => {};
  emitClick(event: MouseEvent): void{
    this.propagateClick();
    this.clickEvent.emit(this.properties.data);
  }
}
