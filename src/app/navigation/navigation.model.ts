export class MenuItem {
  constructor(public name = '', public level = 1, public link?: string , public children?: MenuItem[], public linkChildren?: MenuItem[]) {}
}
