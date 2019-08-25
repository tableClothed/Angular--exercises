import { Component } from '@angular/core';
import { ExchangeService } from 'src/_services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private exchangeService: ExchangeService;

  baseAmount = 1;
  baseCurrency = 'GPB';
  targetCurrency = 'USD';

  get targetAmount() {
    const exchangeRate = this.exchangeService.exchangeRate();
    return this.baseAmount * exchangeRate;
  }

  isValid(value) {
    return Number.isFinite(this.baseAmount);
  }
}
