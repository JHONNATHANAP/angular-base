import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Breadcrumb, Breadcrumbs } from 'src/shared/models';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbs: Breadcrumbs;

  constructor() {

    this.breadcrumbs =
      [
        {
          url: '',
          text: 'Curren Page'
        },
      ]

  }

  ngOnInit(): void {
  }

}
