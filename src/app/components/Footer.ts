import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-mono-950 border-t-2 border-mono-100 py-16 px-8 relative overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div class="space-y-6">
          <h2 class="logo-font text-3xl lowercase tracking-normal">CasaRhoades</h2>
          <p class="text-xl max-w-xs text-mono-300">
            Expertos en jardinería, patios y repuestos para casas rodantes. Tu solución para el hogar y el aire libre.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold border-b border-mono-300 pb-2">Secciones</h3>
          <ul class="space-y-2 text-xl">
            <li><a href="#" class="hover:translate-x-2 inline-block transition-transform">Home</a></li>
            <li><a href="#" class="hover:translate-x-2 inline-block transition-transform">Catalogo</a></li>
            <li><a href="#" class="hover:translate-x-2 inline-block transition-transform">Promociones</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold border-b border-mono-300 pb-2">Ubicación</h3>
          <p class="text-xl text-mono-300">
            AV. Laprida al 361<br>
            Argentina
          </p>
          <div class="brutalist-border p-4 bg-mono-100 text-mono-950 font-bold">
            ABIERTO: LUN - SAB 09:00 - 20:00
          </div>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold border-b border-mono-300 pb-2">Contacto</h3>
          <p class="text-xl text-mono-300">
            info&#64;casarhoades.com<br>
            +54 11 0000-0000
          </p>
        </div>
      </div>
      <div class="mt-20 pt-8 border-t border-mono-800 text-center">
        <p class="text-xl tracking-widest text-mono-500 italic">
          Desarrollado por Ag Studio's 2026 &copy; Todos los derechos reservados.
        </p>
      </div>
      <!-- Decorative background elements -->
      <div class="absolute bottom-[-100px] right-[-50px] opacity-10 text-[200px] logo-font pointer-events-none -rotate-12">
        Rhoades
      </div>
    </footer>
  `
})
export class Footer {}
