import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  result: any;

  constructor() {
    this.countDown(5);
   }

   countDown(start) {
     const time = timer(1, 1000);
     time.subscribe(x =>  {
       console.log(x);
       this.result = start - x;
     });
   }

  ngOnInit() {
  }

}
