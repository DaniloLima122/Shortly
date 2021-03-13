import { NgModule } from '@angular/core';
import { ShortLinkFormComponent } from './short-link-form.component';
import { LinkCardComponent } from '../link-card/link-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShortLinkFormComponent,
    LinkCardComponent
  ],
  exports:[ShortLinkFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class ShortLinkFormModule { }
