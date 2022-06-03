import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppButton, AppIcon, AppList } from '@src/shared/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() properties: AppList;
  defaultIcon: AppIcon = new AppIcon();
  defaultButton: AppButton = new AppButton();
  constructor() {
    this.properties = new AppList();
  }
}
