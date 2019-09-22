export class Quotes {
  showDescription : boolean;
  

  constructor(
    public quoteActual :string,
    public author : string,
    public name : string,
    
  ){
    this.showDescription = false;

  }
}
