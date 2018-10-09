export class MenuItem {
  constructor(public name = '', public link = '') {}
}

export class MenuCategory {
  constructor(public name = '', public items: MenuItem[] = []) {}
}
