import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: Http) { }

  getQuoteOfTheDay(): Promise<Quote> {

    return this.http.get('assets/quote.json').toPromise()
      .then(response => response.json());
  }
}
