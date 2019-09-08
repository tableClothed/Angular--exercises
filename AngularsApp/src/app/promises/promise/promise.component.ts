import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  result: any;
  error: string;
  time: number;

  constructor() {
    const starttime = Date.now();
    this.add(2, 3).then(result => this.add(result, 9))
    .then(result => this.add(result, 10))
    .then(result => this.result = result)
    .catch(error => this.error = error)
    .then( () => this.time = Date.now() - starttime);
  }

  add(x: number, y: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = x + y;
        if (result >= 0) {
          resolve(x + y);
        } else {
          reject('Nieprawidłowa wartość ' + result);
        }
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
