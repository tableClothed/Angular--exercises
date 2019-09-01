import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExchangeService } from 'src/_services/exchange.service';
import { CurrencySelectedComponent } from 'src/currency-selected/currency-selected.component';
import { MyPipePipe } from './my-pipe.pipe';
import { ConverterComponent } from './converter/converter.component';
import { ScreenComponent } from './screen/screen.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpModule } from '@angular/http';

@NgModule({
   declarations: [
      AppComponent,
      CurrencySelectedComponent,
      MyPipePipe,
      ConverterComponent,
      ScreenComponent,
      QuotesComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      HttpModule
   ],
   providers: [
      ExchangeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
