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
  targetAmount = this.exchangeRate;

  update(baseAmount) {
    this.targetAmount = this.exchangeRate * parseFloat(baseAmount);
  }
}
