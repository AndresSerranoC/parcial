import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent],
  exports: [CursosComponent]
})
export class SeriesModule { }
