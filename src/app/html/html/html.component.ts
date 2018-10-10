import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation/navigation.service';
import { MenuItem } from '../../navigation/navigation.model';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  private menuData: MenuItem[] = [
    new MenuItem('Tutorials', 1, null, [
      new MenuItem('Beginner', 2, null, null, [
        new MenuItem('Link', 3, 'link', null, null)
      ]),
      new MenuItem('Intermediate', 2, null, null, []),
      new MenuItem('Advanced', 2, null, null, [])
    ]),
    new MenuItem('References', 1, null, [
      new MenuItem('Tags', 2, null, null, []),
      new MenuItem('Attributes', 2, null, null, []),
      new MenuItem('Characters', 2, null, null, []),
    ])
  ];

  constructor(protected navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.menuData.next(this.menuData);
  }

}
