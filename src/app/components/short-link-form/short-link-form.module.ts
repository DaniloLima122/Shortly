import { NgModule } from '@angular/core';
import { ShortLinkFormComponent } from './short-link-form.component';
import { LinkCardComponent } from '../link-card/link-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CopyLinkDirective } from 'src/app/directives/copy-link.directive';
import {ClipboardModule} from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    ShortLinkFormComponent,
    LinkCardComponent,
    CopyLinkDirective
  ],
  exports:[ShortLinkFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
})
export class ShortLinkFormModule { }
