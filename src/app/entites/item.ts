export class Item {
  constructor(
    public id: number,
    public title: string,
    public selected: boolean
  ) {
    this.id = id;
    this.title = title;
    this.selected = selected || false;
  }
}
