import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showButton = false;
  showSidenav = false;
  routeChangeSub: any = null;

  constructor(private router: Router) {}

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

  }

  ngOnDestroy() {
    if (this.routeChangeSub) {
      this.routeChangeSub.unsubscribe();
    }
  }
}
