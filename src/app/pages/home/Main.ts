import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main',
  standalone: true,
  template: `
    <section class="min-h-[90vh] flex flex-col items-center justify-center text-center p-6 relative">
      <div class="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000">
        <h1 class="logo-font text-6xl md:text-8xl leading-none text-mono-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] lowercase tracking-normal">
          CasaRhoades
        </h1>
        <p class="text-xl md:text-3xl uppercase tracking-[0.3em] font-light text-mono-300">
          Tu patio, tu hogar, tu libertad.
        </p>
      </div>
      
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span class="text-mono-500 uppercase tracking-widest text-sm">Desliza para explorar</span>
        <div class="w-[2px] h-16 bg-gradient-to-b from-mono-100 to-transparent"></div>
      </div>
      
      <!-- Asymmetric elements -->
      <div class="absolute top-1/4 right-10 w-32 h-32 brutalist-border bg-mono-900 -rotate-12 hidden md:block opacity-20"></div>
      <div class="absolute bottom-1/4 left-10 w-48 h-12 brutalist-border bg-mono-100 rotate-6 hidden md:block opacity-10"></div>
    </section>
  `
})
export class HomeMain {}
