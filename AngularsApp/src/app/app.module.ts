import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExchangeService } from 'src/_services/exchange.service';
import { CurrencySelectedComponent } from 'src/currency-selected/currency-selected.component';

@NgModule({
   declarations: [
      AppComponent,
      CurrencySelectedComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [
      ExchangeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
