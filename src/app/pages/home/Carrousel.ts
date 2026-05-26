import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-carrousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-32 bg-mono-900 border-t-2 border-mono-100 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-8 relative">
        <h2 class="text-5xl font-black mb-16 uppercase tracking-widest text-center italic">Inspiración <span class="text-mono-100 not-italic">Exterior</span></h2>
        
        <div class="relative group">
          <div class="flex transition-transform duration-700 ease-in-out" [style.transform]="'translateX(-' + currentIndex * 100 + '%)'">
            <div *ngFor="let slide of slides" class="min-w-full px-4">
              <div class="w-full aspect-video brutalist-border bg-mono-800 flex items-center justify-center relative overflow-hidden">
                <img [src]="slide.image" [alt]="slide.title" class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                <span class="text-8xl font-black text-mono-100 uppercase opacity-20 rotate-6 z-0 select-none">{{slide.title}}</span>
                <div class="absolute bottom-10 left-10 bg-mono-950/90 p-8 brutalist-border max-w-md z-10 backdrop-blur-sm">
                   <h3 class="text-3xl font-bold mb-4 uppercase">{{slide.title}}</h3>
                   <p class="text-xl text-mono-300">{{slide.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button (click)="prev()" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-mono-100 text-mono-950 p-6 brutalist-border hover:translate-x-[-8px] transition-transform z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button (click)="next()" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-mono-100 text-mono-950 p-6 brutalist-border hover:translate-x-[8px] transition-transform z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      
      <!-- Asymmetric decor -->
      <div class="absolute top-0 right-0 w-1/4 h-full bg-mono-100/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
    </section>
  `
})
export class HomeCarrousel {
  currentIndex = 0;
  slides = [
    { 
      title: 'Jardines Zen', 
      desc: 'Diseños que transmiten paz y equilibrio para tu hogar.',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1600'
    },
    { 
      title: 'Aventura RV', 
      desc: 'Todo lo necesario para que tu casa rodante esté lista para la ruta.',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1600'
    },
    { 
      title: 'Patios Modernos', 
      desc: 'Herramientas que mejoran tu espacio exterior.',
      image: 'https://saltandopormimundo.com/wp-content/uploads/2020/09/Cabecera-Palacio-de-Viana.jpg'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
