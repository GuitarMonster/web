export class MenuItem {
  name = '';
  link = '';
}

export class MenuCategory {
  name = '';
  items: MenuItem[] = [];
}
