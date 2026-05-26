import { Component } from '@angular/core';
import { CatalogMain } from './Main';
import { CatalogFilter } from './Filter';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogMain, CatalogFilter],
  template: `
    <div class="max-w-7xl mx-auto px-8 py-20">
      <header class="mb-20 text-center md:text-left">
        <h1 class="text-8xl font-black uppercase tracking-tighter leading-none mb-4">Catálogo</h1>
        <p class="text-3xl text-mono-300 uppercase tracking-widest italic">Explora nuestra selección premium</p>
      </header>
      
      <app-catalog-filter></app-catalog-filter>
      <app-catalog-main></app-catalog-main>
    </div>
  `
})
export class Catalog {}
