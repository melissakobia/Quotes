import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Quotes } from 'src/app/quotes';
import { from } from 'rxjs';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  like = 0;
  dislike = 0;

  @Input() quote: Quotes;

  likeFunction() {
    this.like = this.like + 1;
   }
   dislikeFunction() {
     this.dislike = this.dislike + 1;
   }

   @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
