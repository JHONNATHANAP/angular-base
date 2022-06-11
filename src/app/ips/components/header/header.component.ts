import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppIcon } from '@src/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  @Output() menuClicked = new EventEmitter();
  menuIcon: AppIcon = new AppIcon({ class: 'menu' });
  constructor() {}

  onClicked(): void {
    this.menuClicked.emit();
  }
}
