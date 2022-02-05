import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:'Genesis', say:'In the begining there was terminal', author:'Harrison Gitau'},
    {name:'Learning', say:'It is super easy tp forget stuff if you do not write them down', author:'Steve Fenton'},
    {name:'Life', say:'Just Do It', author:'Nike'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
