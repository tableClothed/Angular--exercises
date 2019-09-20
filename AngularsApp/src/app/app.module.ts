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
import { PromiseComponent } from './promises/promise/promise.component';
import { AsyncplainComponent } from './asyncplain/asyncplain.component';
import { ObservableComponent } from './observable/observable.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkListComponent } from 'src/bookmark-list/bookmark-list.component';
import { BookmarkEditComponent } from './bookmark-edit/bookmark-edit.component';
import { FormComponent } from './form/form.component';
@NgModule({
   declarations: [
      AppComponent,
      CurrencySelectedComponent,
      MyPipePipe,
      ConverterComponent,
      ScreenComponent,
      QuotesComponent,
      PromiseComponent,
      AsyncplainComponent,
      ObservableComponent,
      BookmarksComponent,
      BookmarkListComponent,
      BookmarkEditComponent,
      FormComponent
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
