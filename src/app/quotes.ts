export class Quotes {
  showDescription : boolean;
  

  constructor(
    public quote :string,
    public author : string,
    public name : string,
    
  ){
    this.showDescription = false;

  }
}
