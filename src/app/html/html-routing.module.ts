import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';

const htmlRoutes: Routes = [
  {
    path: '',
    component: HtmlComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(htmlRoutes)
  ],
  exports: [RouterModule]
})
export class HtmlRoutingModule {}
