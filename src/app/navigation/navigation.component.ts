import { Component, OnInit, Input } from '@angular/core';
import { MenuCategory } from './navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() menuCategories: MenuCategory[] = null;

  constructor() {}

  ngOnInit() {
  }

}
