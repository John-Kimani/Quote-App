import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Genesis', 'In the begining there was terminal', 'Harrison Gitau'),
    new Quote('Learning','It is super easy tp forget stuff if you do not write them down', 'Steve Fenton'),
    new Quote('Life', 'Just Do It', 'Nike')
  ];

  //toggle logic
  toggleQuoteDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  } 

  deleteQuote(deletedQuote, index){
    if(deletedQuote){
      let deleteMessage = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if(deleteMessage){
        this.quotes.splice(index, 1);
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
