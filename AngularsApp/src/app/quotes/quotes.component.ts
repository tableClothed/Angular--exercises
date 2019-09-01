import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quote;

  ngOnInit() {
  }

  constructor(quoteService: QuoteService) {
    quoteService.getQuoteOfTheDay()
      .then(quote => this.quote = quote);
  }
}
