import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { DropdownTreeviewSelectComponent } from './dropdown-treeview-select.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TreeviewModule.forRoot()
  ],
  declarations: [
    DropdownTreeviewSelectComponent
  ],
  exports: [
   // DropdownTreeviewSelectDemoComponent
  ]
})
export class DropdownTreeviewSelectModule { }
