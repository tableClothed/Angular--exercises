import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncplain',
  templateUrl: './asyncplain.component.html',
  styleUrls: ['./asyncplain.component.css']
})
export class AsyncplainComponent implements OnInit {
  time: number;
  response: any;
  error: string;

  constructor() {
    const starttime = Date.now();
    this.add(2, 3, result => {
      this.add(result, 10, result2 => {
        this.response = result2;
        this.time = Date.now() - starttime;
      }, error => this.error = error);
    }, error => this.error = error);
  }

  add(x: number, y: number, callBack, errorCallback) {
    setTimeout( () => {
      const result = x + y;
      if (result >= 0) {
        callBack(result);
      } else {
        errorCallback('Nieprawidłowa wartość ' + result);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
