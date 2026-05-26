import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-filter',
  standalone: true,
  template: `
    <div class="brutalist-card bg-mono-900 mb-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div class="col-span-1 md:col-span-2 relative">
          <input type="text" placeholder="Buscar productos..." class="w-full bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute right-4 top-1/2 -translate-y-1/2 text-mono-500"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        
        <select class="bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:outline-none uppercase tracking-widest">
          <option>Todas las Categorías</option>
          <option>Jardín</option>
          <option>Patios</option>
          <option>Casas Rodantes</option>
          <option>Durlock</option>
        </select>
        
        <select class="bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:outline-none uppercase tracking-widest">
          <option>Ordenar por: Relevancia</option>
          <option>Precio: Menor a Mayor</option>
          <option>Precio: Mayor a Menor</option>
          <option>Novedades</option>
        </select>
      </div>
    </div>
  `
})
export class CatalogFilter {}
