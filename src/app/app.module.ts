import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectItemsComponent } from './select-items/select-items.component';
import { SelectionComponent } from './selection/selection.component';
import {FormsModule} from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { ItemselPipe } from './pipe/itemsel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectItemsComponent,
    SelectionComponent,
    ItemListComponent,
    ItemComponent,
    FilterPipe,
    SearchPipe,
    ItemselPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
