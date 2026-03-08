import { Routes } from '@angular/router';

import { Book } from './components/book/book';
import { Home } from './components/home/home';
import { Live } from './components/live/live';
import { Merch } from './components/merch/merch';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'book', component: Book },
  { path: 'merch', component: Merch },
  { path: 'live', component: Live },
];
