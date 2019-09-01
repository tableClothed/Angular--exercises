import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/_services/exchange.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  title = 'app';
  baseAmount = 1;
  baseCurrency = 'GBP';
  targetCurrency = 'USD';

  ngOnInit() {

  }

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
