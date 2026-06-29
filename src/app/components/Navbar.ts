import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 bg-mono-950/80 backdrop-blur-md border-b-2 border-mono-100 px-6 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <a routerLink="/home" (click)="closeMenu()" class="logo-font text-3xl text-mono-100 hover:text-mono-300 transition-colors">CasaRhoades</a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a routerLink="/catalog" class="text-xl uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Catalogo</a>
        <button 
          (click)="showAuth = !showAuth"
          class="p-2 border-2 border-mono-100 hover:bg-mono-100 hover:text-mono-950 transition-all rounded-full group relative cursor-pointer"
          [class.bg-mono-100]="showAuth"
          [class.text-mono-950]="showAuth"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
      </div>

      <!-- Mobile Controls -->
      <div class="flex md:hidden items-center gap-4">
        <button 
          (click)="showAuth = !showAuth"
          class="p-2 border-2 border-mono-100 hover:bg-mono-100 hover:text-mono-950 transition-all rounded-full group relative cursor-pointer"
          [class.bg-mono-100]="showAuth"
          [class.text-mono-950]="showAuth"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        
        <button 
          (click)="toggleMenu()"
          class="p-2 border-2 border-mono-100 hover:bg-mono-100 hover:text-mono-950 transition-all rounded-md cursor-pointer"
          aria-label="Toggle Menu"
        >
          <!-- Burger Icon -->
          <svg *ngIf="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
          <!-- Close Icon -->
          <svg *ngIf="menuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" x2="6" y1="6" y2="18"/>
            <line x1="6" x2="18" y1="6" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Drawer (Brutalist style) -->
    <div 
      *ngIf="menuOpen" 
      class="fixed inset-x-0 top-[74px] bottom-0 z-40 bg-mono-950/95 backdrop-blur-md border-b-4 border-mono-100 flex flex-col p-8 md:hidden transition-all duration-300 ease-in-out"
    >
      <div class="flex flex-col gap-6 mt-12">
        <a 
          routerLink="/catalog" 
          (click)="closeMenu()" 
          class="text-3xl font-black uppercase tracking-wider border-2 border-mono-100 p-4 hover:bg-mono-100 hover:text-mono-950 transition-all text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none"
        >
          Catalogo
        </a>
        <button 
          (click)="openAuth()" 
          class="text-3xl font-black uppercase tracking-wider border-2 border-mono-100 p-4 hover:bg-mono-100 hover:text-mono-950 transition-all text-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none bg-mono-900 text-mono-100 cursor-pointer"
        >
          Mi Cuenta
        </button>
      </div>
    </div>

    <!-- Auth Modal Overlay -->
    <div *ngIf="showAuth" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-mono-950/90 backdrop-blur-md" (click)="showAuth = false"></div>
      
      <div class="relative brutalist-card bg-mono-900 max-w-md w-full p-10 animate-in zoom-in duration-300 shadow-[15px_15px_0px_0px_rgba(255,255,255,1)] border-4 border-mono-100">
        <button (click)="showAuth = false" class="absolute top-4 right-4 text-3xl font-black hover:rotate-90 transition-transform">&times;</button>
        
        <!-- Toggle Tabs -->
        <div class="flex gap-4 mb-10 border-b-2 border-mono-800">
          <button 
            (click)="isLogin = true" 
            class="pb-4 text-2xl font-black uppercase tracking-tighter transition-all"
            [class.border-b-4]="isLogin"
            [class.border-mono-100]="isLogin"
            [class.opacity-50]="!isLogin"
          >
            Ingresar
          </button>
          <button 
            (click)="isLogin = false" 
            class="pb-4 text-2xl font-black uppercase tracking-tighter transition-all"
            [class.border-b-4]="!isLogin"
            [class.border-mono-100]="!isLogin"
            [class.opacity-50]="isLogin"
          >
            Registrarse
          </button>
        </div>

        <!-- Forms -->
        <form class="space-y-6">
          <div *ngIf="!isLogin" class="space-y-2">
            <label class="uppercase font-black text-sm tracking-widest text-mono-400">Nombre Completo</label>
            <input type="text" class="w-full bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] outline-none transition-all" placeholder="Juan Rhoades">
          </div>

          <div class="space-y-2">
            <label class="uppercase font-black text-sm tracking-widest text-mono-400">Email</label>
            <input type="email" class="w-full bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] outline-none transition-all" placeholder="usuario&#64;rhoades.com">
          </div>

          <div class="space-y-2">
            <label class="uppercase font-black text-sm tracking-widest text-mono-400">Contraseña</label>
            <input type="password" class="w-full bg-mono-950 border-2 border-mono-100 p-4 text-xl focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] outline-none transition-all" placeholder="********">
          </div>

          <button type="submit" class="w-full bg-mono-100 text-mono-950 font-black py-5 text-2xl brutalist-border hover:bg-mono-950 hover:text-mono-100 transition-all uppercase tracking-widest mt-4">
            {{ isLogin ? 'Entrar &rarr;' : 'Crear Cuenta' }}
          </button>
        </form>

        <p class="mt-8 text-center text-mono-500 italic text-lg">
          {{ isLogin ? '¿No tienes cuenta aún?' : '¿Ya eres parte de Rhoades?' }}
          <span class="text-mono-100 cursor-pointer underline decoration-1 underline-offset-4" (click)="isLogin = !isLogin">
            {{ isLogin ? 'Regístrate aquí' : 'Ingresa ahora' }}
          </span>
        </p>
      </div>
    </div>
  `
})
export class Navbar {
  showAuth = false;
  isLogin = true;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  openAuth() {
    this.showAuth = true;
    this.menuOpen = false;
  }
}
