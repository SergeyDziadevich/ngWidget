import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectItemsComponent } from './select-items/select-items.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectItemsComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
