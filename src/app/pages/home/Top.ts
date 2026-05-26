import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-end mb-20 border-b-2 border-mono-100 pb-8">
          <h2 class="text-6xl font-black uppercase tracking-tighter">Promociones <span class="italic text-mono-500">Top 6</span></h2>
          <a href="#" class="text-2xl hover:underline underline-offset-8 decoration-2 uppercase font-bold">Ver todo el catálogo &rarr;</a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div *ngFor="let item of promotions" class="group brutalist-card hover:bg-mono-100 transition-all duration-500">
            <div class="relative overflow-hidden aspect-square mb-8 brutalist-border bg-mono-800 flex items-center justify-center">
               <!-- Product Specific Icon -->
               <div class="z-0 text-mono-100 group-hover:scale-110 transition-transform duration-500" [innerHTML]="getProductIcon(item.name)"></div>
               
               <div class="absolute top-4 right-4 bg-mono-100 text-mono-950 px-3 py-1 text-2xl font-bold brutalist-border group-hover:bg-mono-950 group-hover:text-mono-100">
                 -{{item.discount}}%
               </div>
            </div>
            <h3 class="text-3xl font-black mb-2 uppercase group-hover:text-mono-950">{{item.name}}</h3>
            <p class="text-xl text-mono-400 group-hover:text-mono-700 mb-6">{{item.desc}}</p>
            <div class="flex justify-between items-center border-t border-mono-800 group-hover:border-mono-300 pt-6">
              <span class="text-4xl font-black group-hover:text-mono-950">{{item.price | currency}}</span>
              <button class="bg-mono-950 text-mono-100 px-6 py-3 brutalist-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] group-hover:bg-mono-950 group-hover:text-mono-100">
                Añadir +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTop {
  private sanitizer = inject(DomSanitizer);
  
  promotions = [
    { name: 'Set Herramientas Pro', category: 'Jardin', desc: 'Kit completo de acero inoxidable.', price: 12500, discount: 20 },
    { name: 'Luces Solar Exterior', category: 'Decoracion', desc: 'Resistentes al agua IP65.', price: 4500, discount: 15 },
    { name: 'Bomba Agua RV 12V', category: 'Repuestos', desc: 'Alta presión para casas rodantes.', price: 28000, discount: 10 },
    { name: 'Mesa Plegable Patio', category: 'Patios', desc: 'Madera tratada para exteriores.', price: 15900, discount: 25 },
    { name: 'Tanque Aguas Grises', category: 'Repuestos', desc: 'Capacidad 40L ultra-reforzado.', price: 35000, discount: 5 },
    { name: 'Cortadora Césped', category: 'Herramientas', desc: 'Motor 4 tiempos alta potencia.', price: 89000, discount: 18 }
  ];

  getProductIcon(name: string): SafeHtml {
    const icons: { [key: string]: string } = {
      'Set Herramientas Pro': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      'Luces Solar Exterior': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
      'Bomba Agua RV 12V': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M12 8V2"/><path d="M12 12l4 4"/><path d="m12 12-4 4"/></svg>',
      'Mesa Plegable Patio': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M3 13h18"/><path d="M4 7h16"/><path d="m4 19 3-3"/><path d="m20 19-3-3"/></svg>',
      'Tanque Aguas Grises': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M10 6v12"/><path d="M14 6v12"/><path d="M7 6v12"/><path d="M17 6v12"/></svg>',
      'Cortadora Césped': '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M4 17h16v-4H4v4zM12 13V7l8-2M8 13V9"/></svg>'
    };
    const icon = icons[name] || '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
