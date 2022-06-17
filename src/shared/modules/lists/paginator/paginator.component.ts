import { Component, Input } from '@angular/core';
import { AppButton, AppIcon } from '@src/shared/models';
import { AppPaginator } from '@src/shared/models/paginator-model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() properties: AppPaginator;
  defaultIcon: AppIcon = new AppIcon();
  defaultButton: AppButton = new AppButton();
  constructor() {
    this.properties = new AppPaginator();
  }
}
