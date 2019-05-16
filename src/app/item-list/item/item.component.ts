import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../entites/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();

  delete(item): void {
    // console.log(item);
    this.deleteItem.emit(item);
  }
}
