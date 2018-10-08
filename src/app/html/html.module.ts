import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html/html.component';
import { HtmlRoutingModule } from './html-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HtmlRoutingModule,
  ],
  declarations: [
    HtmlComponent
  ],
  exports: []
})
export class HtmlModule { }
