import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 px-8 bg-mono-900/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-7xl font-black mb-20 text-center uppercase tracking-tighter">Trayectoria</h2>
        
        <div class="relative">
          <!-- Central Line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-mono-100 hidden md:block"></div>
          
          <div class="space-y-24">
            <div *ngFor="let item of history; let i = index" 
                 class="flex flex-col md:flex-row items-center gap-8 md:gap-0"
                 [ngClass]="{'md:flex-row-reverse': i % 2 !== 0}">
              
              <div class="w-full md:w-1/2 px-12">
                <div class="brutalist-card bg-mono-950" [ngClass]="{'text-right': i % 2 === 0, 'text-left': i % 2 !== 0}">
                  <span class="text-6xl font-black text-mono-500 mb-4 block">{{item.year}}</span>
                  <h3 class="text-3xl font-bold mb-4 uppercase">{{item.title}}</h3>
                  <p class="text-xl text-mono-300">{{item.desc}}</p>
                </div>
              </div>
              
              <div class="w-8 h-8 bg-mono-100 brutalist-border rounded-full z-10 hidden md:block"></div>
              
              <div class="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeTimeline {
  history = [
    { year: '1995', title: 'Fundación', desc: 'Iniciamos como un pequeño taller de repuestos en el corazón de la ciudad.' },
    { year: '2005', title: 'Expansión Jardin', desc: 'Incorporamos nuestra línea completa de herramientas y decoración para exteriores.' },
    { year: '2015', title: 'Nueva Sucursal', desc: 'Inauguramos nuestro local principal en AV. Laprida 361 con showroom exclusivo.' },
    { year: '2026', title: 'Era Digital', desc: 'Lanzamos nuestra plataforma de catálogo online y venta directa personalizada.' }
  ];
}
