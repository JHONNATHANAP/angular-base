import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsListProperties } from 'src/shared';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() items: ItemsListProperties = [];
  @Output() listEvents = new EventEmitter<any>();
  
  constructor() { }
 

  ngOnInit(): void {
  }
  openEvent(item:any){
    this.listEvents.emit({event:'open',data:item})

  }

}
