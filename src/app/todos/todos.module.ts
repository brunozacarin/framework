import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { MatCardModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class TodosModule { }
