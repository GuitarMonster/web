import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html/html.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'html',
    loadChildren: './html/html.module#HtmlModule'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
