import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ExchangeService } from 'src/_services/exchange.service';

@Component({
  selector: 'app-currency-selected',
  templateUrl: './currency-selected.component.html',
  styleUrls: ['./currency-selected.component.css']
})
export class CurrencySelectedComponent implements OnInit {
  @Input() selected: string;
  supportedCurrencies: string[];
  @Output() selectedChange = new EventEmitter<string>();

  constructor(private exchange: ExchangeService) {
    this.supportedCurrencies = exchange.supportedCurrencies;
  }

  ngOnInit() {
  }

  onSelectedChange(select: string) {
    this.selected = select;
    this.selectedChange.emit(select);
  }

}
