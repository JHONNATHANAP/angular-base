import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppExpansionPanel } from '@src/shared/models/expansion-panel-model';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent {
  @Input() properties: AppExpansionPanel;
  constructor() {
    this.properties = new AppExpansionPanel();
  }
}
