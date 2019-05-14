import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() items: Item[];
  // @Input() startSelectItems: Item[];
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() selectResultItems = new EventEmitter<Item[]>();

  maxSelect = 3;
  public currentSelectItems: Item[] = [];

 // private itemsSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.currentSelectItems = this.items.filter(h => h.selected === true).slice();
  }

  ngAfterViewInit() {
    if (this.currentSelectItems.length >= this.maxSelect) {
      this.selectDisabled();
    }
  }
  // getItems(): void {
  //   this.itemsSub = this.selectItemService.getItems()
  //     .subscribe(items => this.items = items);
  // }

  onDeleteItem(item) {
   // this.selectItemService.deleteItem(item);
    this.currentSelectItems = this.currentSelectItems.filter(h => h !== item);
    this.items[item.id].selected = false;

    if (this.currentSelectItems.length <= this.maxSelect) {
       this.selectAbled();
    }
  }

  dialogClose() {
    this.closeDialog.emit();
  }

  selectDisabled() {
    const x = document.querySelectorAll('.list-items input[type=checkbox]');
    x.forEach(item => item.setAttribute('disabled', 'false'));
  }

  selectAbled() {
    console.log(this.currentSelectItems.length);
    const x = document.querySelectorAll('.list-items input[type=checkbox]');
    x.forEach(item => item.removeAttribute('disabled'));
  }

  onCheck(e) {
    if (this.currentSelectItems.length <= this.maxSelect) {
      if (e.target.checked) {
        this.currentSelectItems.push({ id: +e.target.value, title: `Item ${e.target.value}`, selected: true });

        if (this.currentSelectItems.length >= this.maxSelect) {
          this.selectDisabled();
        }

      } else {
        const ind = this.currentSelectItems.findIndex(value => +value.id === +e.target.value);
        this.currentSelectItems.splice(ind, 1);
      }
    }
  }

  saveSelectItem() {
    this.selectResultItems.emit(this.currentSelectItems);
    this.closeDialog.emit();
  }

  cancel() {
    this.closeDialog.emit();
  }

  ngOnDestroy(): void {
   // this.itemsSub.unsubscribe();
  }
}


