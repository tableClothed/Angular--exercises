import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/_services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  baseAmount = 1;
  baseCurrency = 'GBP';
  targetCurrency = 'USD';

  constructor(private exchangeService: ExchangeService) {}

  get targetAmount() {
    const exchangeRate = this.exchangeService
      .getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  }

  isValid(value) {
    return Number.isFinite(value) && value >= 0;
  }

  onSetClick(event) {
    console.log(event);
  }
}
