import { Routes } from '@angular/router';
import { Home } from './pages/home/Home';
import { Catalog } from './pages/catalog/Catalog';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: '**', redirectTo: 'home' }
];
