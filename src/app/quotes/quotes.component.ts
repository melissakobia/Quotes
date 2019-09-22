import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes [] = [
   new Quotes (1,'Hell0','I','am happy'),
  ];

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
