import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home').then((m) => m.Home) },
  { path: 'book', loadComponent: () => import('./components/book/book').then((m) => m.Book) },
  { path: 'merch', loadComponent: () => import('./components/merch/merch').then((m) => m.Merch) },
  { path: 'live', loadComponent: () => import('./components/live/live').then((m) => m.Live) },
  { path: 'media', loadComponent: () => import('./components/media/media').then((m) => m.Media) },
];
