import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbModule
  ]

})
export class AccessibilityModule { }
