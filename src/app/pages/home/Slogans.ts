import { Component } from '@angular/core';

@Component({
  selector: 'app-home-slogans',
  standalone: true,
  template: `
    <section class="py-24 bg-mono-100 overflow-hidden transform skew-y-1 relative">
      <div class="flex whitespace-nowrap animate-marquee">
        <span class="text-mono-950 text-[10rem] font-black uppercase tracking-tighter px-8">
          Jardin &bull; Patios &bull; Casas Rodantes &bull; Durlock &bull; Repuestos &bull;
        </span>
        <span class="text-mono-950 text-[10rem] font-black uppercase tracking-tighter px-8">
          Jardin &bull; Patios &bull; Casas Rodantes &bull; Durlock &bull; Repuestos &bull;
        </span>
      </div>
      <div class="flex whitespace-nowrap animate-marquee-reverse mt-[-4rem]">
        <span class="text-mono-950/20 text-[10rem] font-black uppercase tracking-tighter px-8 italic">
          Calidad &bull; Experiencia &bull; Compromiso &bull; Rhoades &bull; 2026 &bull;
        </span>
        <span class="text-mono-950/20 text-[10rem] font-black uppercase tracking-tighter px-8 italic">
          Calidad &bull; Experiencia &bull; Compromiso &bull; Rhoades &bull; 2026 &bull;
        </span>
      </div>
    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee-reverse {
      animation: marquee-reverse 30s linear infinite;
    }
  `]
})
export class HomeSlogans {}
