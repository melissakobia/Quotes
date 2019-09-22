export class Quotes {
  showDescription : boolean;
  

  constructor(
    public id :number,
    public quoteActual :string,
    public author : string,
    public name : string,
    public countDate : Date
    
  ){
    this.showDescription = false;

  }
}
