import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {timer} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  result: any;

  constructor() {
    this.countDown(5)
    .subscribe(result => this.result = result, null, () => this.result = 'Complete!');
   }

   countDown(start): Observable<number> {
     return Observable.timer(1, 1000)
     .map(x => start - x)
     .takeWhile(x => x > 0);
   }

  ngOnInit() {
  }

}
