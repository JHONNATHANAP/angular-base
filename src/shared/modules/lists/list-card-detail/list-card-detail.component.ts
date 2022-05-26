import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemListDetailProperties, ItemsListProperties } from 'src/shared/models';

@Component({
  selector: 'app-list-card-detail',
  templateUrl: './list-card-detail.component.html',
  styleUrls: ['./list-card-detail.component.scss']
})
export class ListCardDetailComponent implements OnInit {
  @Input() items: ItemsListProperties = [];
  @Output() listDetailEvents = new EventEmitter<any>();
  @Input() item!: ItemListDetailProperties;
  constructor() { }

  ngOnInit(): void {
  }
  activeRoute(id:number):boolean{
    return this.item?.id==id;
  }
  openEvent(item:any){
    this.listDetailEvents.emit({event:'open',data:item})

  }
  clickButton(event:any){
    this.listDetailEvents.emit({event:event.event,data:event.data})
  }

}
