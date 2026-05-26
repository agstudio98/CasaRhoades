import { Component } from '@angular/core';

@Component({
  selector: 'app-home-who',
  standalone: true,
  template: `
    <section class="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div class="relative order-2 md:order-1">
        <div class="brutalist-card relative z-10 bg-mono-800">
          <h2 class="text-6xl mb-8 font-bold leading-none">Sobre<br>Nosotros</h2>
          <p class="text-2xl text-mono-200 leading-relaxed mb-6">
            Nacimos con la pasión de transformar espacios al aire libre. En CasaRhoades, no solo vendemos productos, creamos experiencias para que disfrutes de tu patio, jardín y tus viajes en casa rodante como nunca antes.
          </p>
          <p class="text-xl text-mono-400">
            Desde repuestos especializados hasta lo último en decoración de jardinería, nuestra sucursal en AV. Laprida es el punto de encuentro para los amantes del buen vivir.
          </p>
        </div>
        <!-- Shadow element for asymmetric look -->
        <div class="absolute inset-0 translate-x-12 translate-y-12 border-2 border-mono-100 -z-10 bg-mono-950/50"></div>
      </div>
      
      <div class="order-1 md:order-2 space-y-8">
        <div class="flex flex-col gap-4">
          <span class="text-8xl font-black text-mono-100 opacity-20">01</span>
          <h3 class="text-4xl font-bold border-l-4 border-mono-100 pl-6 uppercase tracking-widest">Tradición y Calidad</h3>
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-8xl font-black text-mono-100 opacity-20">02</span>
          <h3 class="text-4xl font-bold border-l-4 border-mono-100 pl-6 uppercase tracking-widest">Atención Experta</h3>
        </div>
      </div>
    </section>
  `
})
export class HomeWho {}
