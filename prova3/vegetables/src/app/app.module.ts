import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VegetablesListComponent } from './vegetables-list/vegetables-list.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetablesListComponent,
    VegetableDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
