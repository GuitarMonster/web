import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation/navigation.service';
import { MenuCategory, MenuItem } from '../../navigation/navigation.model';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  private menuCategories: MenuCategory[] = [
    new MenuCategory('Tutorials', [
      new MenuItem('Getting started', 'getting-started')
    ]),
    new MenuCategory('References', [
      new MenuItem('Tags', 'tags'),
      new MenuItem('Attributes', 'attributes'),
      new MenuItem('Characters', 'characters'),
    ])
  ];

  constructor(protected navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.menuCategories.next(this.menuCategories);
  }

}
