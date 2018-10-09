import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuCategory } from './navigation/navigation.model';
import { NavigationService } from './navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showButton = false;
  showSidenav = false;
  routeChangeSub: any = null;
  menuSub: any = null;
  menuCategories: MenuCategory[] = null;

  constructor(private router: Router, private navigationService: NavigationService) {}

  ngOnInit() {
    this.routeChangeSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('overview') || event.url.includes('about')) {
          this.showButton = false;
          this.showSidenav = false;
        } else {
          this.showButton = true;
          this.showSidenav = true;
        }
      }
    });

    this.menuSub = this.navigationService.menuCategories.subscribe(categories => {
      this.menuCategories = categories;
    });
  }

  ngOnDestroy() {
    if (this.routeChangeSub) {
      this.routeChangeSub.unsubscribe();
    }
    if (this.menuSub) {
      this.menuSub.unsubscribe();
    }
  }
}
