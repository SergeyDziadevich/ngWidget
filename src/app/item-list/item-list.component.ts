import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @Input() items: Item[];
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();

  onDeleteItem(item) {
    this.deleteItem.emit(item);
  }
}
