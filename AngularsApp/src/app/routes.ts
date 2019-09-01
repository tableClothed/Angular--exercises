import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { QuotesComponent } from './quotes/quotes.component';

export const appRoutes: Routes = [
    { path: 'waluta', component: ConverterComponent},
    { path: 'cytaty', component: QuotesComponent},
    { path: '**', redirectTo: 'waluta'}
];
