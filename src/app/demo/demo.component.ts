import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  {
  menu = [{ name: 'Formularios', path: './demo/controls' },{ name: 'Listas', path: './demo/tables' }];
  constructor() { }

}
