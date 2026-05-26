import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-pays',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 bg-mono-100 text-mono-950">
      <div class="max-w-7xl mx-auto px-8">
        <h2 class="text-7xl font-black mb-20 text-center uppercase tracking-tighter">Financiación & Pagos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div *ngFor="let promo of bankPromos" class="border-4 border-mono-950 p-10 flex flex-col items-center text-center hover:bg-mono-950 hover:text-mono-100 transition-all duration-300">
             <div class="text-5xl font-black mb-6 uppercase tracking-widest border-b-4 border-current pb-2">{{promo.bank}}</div>
             <div class="text-7xl font-black mb-4">{{promo.installments}}</div>
             <span class="text-2xl font-bold uppercase tracking-widest mb-6">Cuotas sin interés</span>
             <p class="text-xl opacity-70 italic">{{promo.valid}}</p>
          </div>
        </div>
        
        <div class="mt-20 flex flex-wrap justify-center gap-16 items-center opacity-80">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            <span class="text-xl font-bold mt-4 uppercase tracking-widest">Crédito</span>
          </div>
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
            <span class="text-xl font-bold mt-4 uppercase tracking-widest">Transferencia</span>
          </div>
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="22" height="18" rx="2"/><path d="M21 11.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1-3 0"/></svg>
            <span class="text-xl font-bold mt-4 uppercase tracking-widest">Efectivo</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomePays {
  bankPromos = [
    { bank: 'Nación', installments: '12', valid: 'Válido todos los días' },
    { bank: 'Santander', installments: '6', valid: 'Viernes y Sábados' },
    { bank: 'Galicia', installments: '9', valid: 'Exclusivo Online' }
  ];
}
