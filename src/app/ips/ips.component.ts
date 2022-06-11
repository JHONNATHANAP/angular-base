import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { views } from '@src/const';

@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.scss'],
})
export class IpsComponent {
  items: any[] = views;
  constructor(public router: Router) {}

  activeRoute(node: any) {
    return node.path === this.router?.url?.split('?')[0];
  }
}
