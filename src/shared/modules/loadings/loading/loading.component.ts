import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppLoading } from '@src/shared/models/loading-model';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Output() clickEvent = new EventEmitter<any>();
  @Input() properties: AppLoading;
  constructor() {
    this.properties = new AppLoading();
    setInterval(() => {
      this.changeColor();
    }, 400);
  }
  changeColor() {
    this.properties.color =
      this.properties.color === 'primary' ? 'accent' : 'primary';
  }
}
