import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found.component';
import { DropdownTreeviewSelectModule } from './dropdown-treeview-select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
    DropdownTreeviewSelectModule,
    AppRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    BookComponent,
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
