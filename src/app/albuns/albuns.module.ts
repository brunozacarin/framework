import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { MatCardModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [
    AlbunsComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class AlbunsModule { }
