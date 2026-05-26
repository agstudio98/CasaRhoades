import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div *ngFor="let product of products" class="brutalist-card bg-mono-900 group hover:translate-y-[-12px] transition-all duration-300">
        <div class="aspect-square bg-mono-800 brutalist-border mb-6 flex items-center justify-center relative overflow-hidden">
           <!-- Large Product Specific Icon -->
           <div class="z-10 text-mono-100 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center" [innerHTML]="getProductIcon(product.name)"></div>
           
           <div class="absolute inset-0 bg-mono-100 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
        
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-black uppercase tracking-tight">{{product.name}}</h3>
            <span class="text-sm font-bold bg-mono-100 text-mono-950 px-2 py-1 brutalist-border">{{product.stock}} DISP.</span>
          </div>
          <p class="text-lg text-mono-400 leading-tight h-12 overflow-hidden">{{product.description}}</p>
          <div class="flex items-baseline gap-2 pt-4 border-t border-mono-800">
            <span class="text-3xl font-black">{{product.price | currency}}</span>
            <span class="text-sm text-mono-500 line-through" *ngIf="product.oldPrice">{{product.oldPrice | currency}}</span>
          </div>
          <button (click)="openOrder(product)" class="w-full bg-mono-100 text-mono-950 font-black p-4 brutalist-border hover:bg-mono-950 hover:text-mono-100 transition-colors uppercase tracking-widest text-lg flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Solicitar pedido
          </button>
        </div>
      </div>
    </div>

    <!-- Simple Order Modal Placeholder -->
    <div *ngIf="selectedProduct" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
       <div class="absolute inset-0 bg-mono-950/90 backdrop-blur-sm" (click)="selectedProduct = null"></div>
       <div class="relative brutalist-card bg-mono-900 max-w-2xl w-full p-12 animate-in zoom-in duration-300 shadow-[20px_20px_0px_0px_rgba(255,255,255,1)]">
          <button (click)="selectedProduct = null" class="absolute top-4 right-4 text-4xl font-black">&times;</button>
          <h2 class="text-5xl font-black uppercase mb-8 border-b-4 border-mono-100 pb-4">Confirmar Pedido</h2>
          <div class="flex gap-8 mb-8 items-center">
            <div class="w-32 h-32 bg-mono-800 brutalist-border flex items-center justify-center" [innerHTML]="getProductIcon(selectedProduct.name)"></div>
            <div>
              <h3 class="text-3xl font-bold uppercase">{{selectedProduct.name}}</h3>
              <p class="text-4xl font-black mt-2 text-mono-100">{{selectedProduct.price | currency}}</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex flex-col gap-2">
              <label class="uppercase font-black text-sm tracking-widest">Método de Pago</label>
              <select class="bg-mono-950 border-2 border-mono-100 p-4 text-xl">
                <option>Transferencia Bancaria (10% OFF)</option>
                <option>Mercado Pago</option>
                <option>Tarjeta de Crédito / Débito</option>
                <option>Efectivo en Sucursal</option>
              </select>
            </div>
            <button class="w-full bg-mono-100 text-mono-950 p-6 text-2xl font-black brutalist-border hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.5)] transition-all uppercase tracking-tighter flex items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              Finalizar y Contactar
            </button>
          </div>
       </div>
    </div>
  `
})
export class CatalogMain {
  private sanitizer = inject(DomSanitizer);
  selectedProduct: any = null;

  products = [
    { id: 1, name: 'Tijera Podar Pro', category: 'Jardin', price: 5600, oldPrice: 6500, stock: 12, description: 'Cuchillas de acero al carbono, mango ergonómico.' },
    { id: 2, name: 'Manguera 25mts', category: 'Jardin', price: 8900, stock: 45, description: 'Reforzada, alta resistencia de la intemperie.' },
    { id: 3, name: 'Inodoro RV Portátil', category: 'Casas Rodantes', price: 45000, oldPrice: 52000, stock: 5, description: 'Capacidad 20L, cierre hermético anti-olores.' },
    { id: 4, name: 'Placa Durlock 12.5mm', category: 'Construccion', price: 12000, stock: 100, description: 'Estándar para tabiques y cielorrasos.' },
    { id: 5, name: 'Foco LED Exterior', category: 'Patios', price: 3200, stock: 32, description: 'Potencia 50W, luz blanca fría, IP65.' },
    { id: 6, name: 'Climatizador RV', category: 'Casas Rodantes', price: 125000, stock: 3, description: 'Bajo consumo 12V, control remoto.' },
    { id: 7, name: 'Abono Orgánico 5kg', category: 'Jardin', price: 4200, stock: 20, description: 'Nutrición completa para todo tipo de plantas.' },
    { id: 8, name: 'Reposera Aluminio', category: 'Patios', price: 28000, stock: 15, description: 'Ultra liviana, 5 posiciones de reclinado.' }
  ];

  getProductIcon(name: string): SafeHtml {
    const icons: { [key: string]: string } = {
      'Tijera Podar Pro': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 7L3 15M13 17L21 9M8 4l3 3-3 3M16 20l-3-3 3-3M11 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>',
      'Manguera 25mts': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11c0-2.2 1.8-4 4-4h6a4 4 0 0 1 0 8h-6a4 4 0 0 0 0 8h2"/><path d="M17 7V3l3 1-3 1z"/></svg>',
      'Inodoro RV Portátil': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2h10v4H7zM5 6h14v2H5zM6 8h12v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8zM9 12h6"/></svg>',
      'Placa Durlock 12.5mm': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M14 7l-5 5 2 2 5-5zM9 12l-2 2M16 7l2-2"/></svg>',
      'Foco LED Exterior': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M5 16l2-3M19 16l-2-3M12 13v8M8 21h8"/><path d="M12 7V3M8 4l1 1M15 4l-1 1"/></svg>',
      'Climatizador RV': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10M12 7v10"/></svg>',
      'Abono Orgánico 5kg': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h12l1 3H5l1-3zm1-3h10l1 3H6l1-3zm1-3h8l1 3H8l1-3zm2-3h4l1 3h-6l1-3z"/></svg>',
      'Reposera Aluminio': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18M5 17l2-10h3l2 10M15 17l-2-5h-3"/><path d="M10 7l8 3 3 7"/></svg>'
    };
    const icon = icons[name] || '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  openOrder(product: any) {
    this.selectedProduct = product;
  }
}
