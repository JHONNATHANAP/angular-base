import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppExpansionPanel } from '@src/shared/models/expansion-panel-model';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  @Input() properties: AppExpansionPanel;
  constructor() {
    this.properties = new AppExpansionPanel();
  }
}
