import { Component } from '@angular/core';

@Component({
  selector: 'app-home-events',
  standalone: true,
  template: `
    <section class="py-32 bg-mono-950 border-y-2 border-mono-100 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div class="flex-1 space-y-8">
          <h2 class="text-7xl font-black uppercase tracking-tighter leading-none">Workshop<br>de<br>Primavera</h2>
          <p class="text-2xl text-mono-300 max-w-lg">
            Aprendé a diseñar tu jardín soñado con nuestros expertos. Charlas gratuitas sobre paisajismo, mantenimiento de piscinas y climatización de RVs.
          </p>
          <div class="flex gap-4">
             <div class="brutalist-card bg-mono-100 text-mono-950 flex flex-col items-center justify-center min-w-[120px]">
               <span class="text-4xl font-black">15</span>
               <span class="text-xl uppercase font-bold tracking-widest">Abril</span>
             </div>
             <div class="brutalist-card bg-mono-900 border-mono-100 flex flex-col items-center justify-center min-w-[120px]">
               <span class="text-4xl font-black">10:00</span>
               <span class="text-xl uppercase font-bold tracking-widest">AM</span>
             </div>
          </div>
          <button class="bg-mono-100 text-mono-950 px-10 py-5 text-2xl font-black brutalist-border hover:translate-x-4 transition-transform uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
            Reservar mi lugar
          </button>
        </div>
        
        <div class="flex-1 relative">
            <div class="w-full aspect-[4/5] brutalist-border bg-mono-800 rotate-3 flex items-center justify-center overflow-hidden">
              <img src="/workshop.png" alt="Workshop de Primavera" class="w-full h-full object-cover" />
            </div>
           <!-- Cartographic lines -->
           <div class="absolute -top-10 -right-10 w-40 h-40 border border-mono-100/20 rounded-full"></div>
           <div class="absolute -bottom-10 -left-10 w-60 h-60 border border-mono-100/10 rounded-full"></div>
        </div>
      </div>
      
      <!-- Background Text -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black text-mono-100/5 uppercase pointer-events-none select-none tracking-tighter">
        Comunidad Rhoades
      </div>
    </section>
  `
})
export class HomeEvents {}
