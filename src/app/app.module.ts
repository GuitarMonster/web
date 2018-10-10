import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { RoutingModule } from './routing.module';
import { OverviewComponent } from './overview/overview.component';
import { NavigationService } from './navigation/navigation.service';
import { MenuItemComponent } from './navigation/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
