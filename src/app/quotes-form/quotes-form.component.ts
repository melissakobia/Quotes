import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { from } from 'rxjs';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes ("", "","");

  constructor() { }

  ngOnInit() {
  }

}
