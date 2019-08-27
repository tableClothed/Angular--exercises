import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService } from 'src/_services/exchange.service';

@Component({
  selector: 'app-currency-selected',
  templateUrl: './currency-selected.component.html',
  styleUrls: ['./currency-selected.component.css']
})
export class CurrencySelectedComponent implements OnInit {
  @Input() selected: string;
  supportedCurrencies: string[];

  constructor(private exchange: ExchangeService) {
    this.supportedCurrencies = exchange.supportedCurrencies;
  }

  ngOnInit() {
  }

}
