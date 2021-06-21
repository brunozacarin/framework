import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensComponent } from './postagens.component';
import { MatCardModule } from '@angular/material';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatTooltipModule } from '@angular/material';


@NgModule({
  declarations: [
    PostagensComponent
  ],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatRippleModule
  ]
})
export class PostagensModule { }
