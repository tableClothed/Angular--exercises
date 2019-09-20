import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PromiseComponent } from './promises/promise/promise.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { FormComponent } from './form/form.component';

export const appRoutes: Routes = [
    { path: 'waluta', component: ConverterComponent},
    { path: 'cytaty', component: QuotesComponent},
    { path: 'promise', component: PromiseComponent},
    { path: 'bookmarks', component: BookmarksComponent},
    { path: 'form', component: FormComponent},
    { path: '**', redirectTo: 'waluta'}
];
