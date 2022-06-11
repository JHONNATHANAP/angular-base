import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { views } from '@src/const';
import { Subject } from 'rxjs';

interface FoodNode {
  name: string;
  icon?: any;
  children?: FoodNode[];
}

const TREE_DATA: any[] = [
  {
    title: 'Fruit',
    children: [
      { title: 'Apple' },
      { title: 'Banana' },
      { title: 'Fruit loops' },
    ],
  },
  {
    title: 'Vegetables',
    children: [
      {
        title: 'Green',
        children: [{ title: 'Broccoli' }, { title: 'Brussels sprouts' }],
      },
      {
        title: 'Orange',
        children: [{ title: 'Pumpkins' }, { title: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent  {
  @Output() menuToggle = new EventEmitter<void>();

  @Input() isAuthorized!: boolean | null;

  @Output() signOut = new EventEmitter<void>();
  options = views;
  //options=TREE_DATA
  private destroy = new Subject<any>();

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor(public router: Router) {
    this.dataSource.data = this.options;
  }
  activeRoute(node: any) {
    return node.path === this.router?.url?.split('?')[0];
  }
  activeParentRoute(node) {
    return node.children.filter((e) => {
      return e.path === this.router?.url?.split('?')[0];
    }).length > 0
      ? true
      : false;
  }
  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;


  closeMenu(op: any): void {
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }
  changeRout(routh) {
    this.router.navigateByUrl(routh);
  }
}
