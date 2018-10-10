import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../navigation.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem = null;

  constructor() { }

  ngOnInit() {
  }

}
