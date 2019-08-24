import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  exchangeRate = 0.7;
  baseAmount = 1;

  get targetAmount() {
    return this.baseAmount * this.exchangeRate;
  }
}
