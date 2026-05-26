import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Floating Button -->
    <button 
      (click)="toggleChat()"
      class="fixed bottom-8 right-8 z-[110] p-4 brutalist-border bg-mono-100 text-mono-950 transition-transform hover:scale-110 group shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]"
    >
      <svg *ngIf="!isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v4"/><path d="M12 15h.01"/></svg>
      <svg *ngIf="isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:rotate-90 transition-transform"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>

    <!-- Chatbot Window -->
    <div *ngIf="isOpen" class="fixed bottom-28 right-8 z-[110] w-[350px] md:w-[400px] brutalist-card bg-mono-900 border-4 border-mono-100 shadow-[15px_15px_0px_0px_rgba(255,255,255,1)] animate-in slide-in-from-bottom-10 duration-300">
      <!-- Header -->
      <div class="bg-mono-100 text-mono-950 p-4 border-b-4 border-mono-950 flex justify-between items-center">
        <h3 class="text-xl font-black uppercase tracking-widest flex items-center gap-2">
          ¿Tenes una Consulta?
        </h3>
        <span class="text-xs font-bold uppercase">En línea</span>
      </div>

      <!-- Messages Area -->
      <div class="h-[400px] overflow-y-auto p-4 space-y-4 bg-mono-950/50 flex flex-col scrollbar-thin scrollbar-thumb-mono-100">
        <div *ngFor="let msg of messages" 
             [class]="msg.isBot ? 'self-start bg-mono-800 border-2 border-mono-100 p-3 max-w-[80%] brutalist-border-sm' : 'self-end bg-mono-100 text-mono-950 p-3 max-w-[80%] border-2 border-mono-950 font-bold'">
          <p class="text-lg leading-tight">{{msg.text}}</p>
          <span class="text-[10px] mt-1 block opacity-50">{{msg.time}}</span>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 border-t-4 border-mono-100 bg-mono-900">
        <form (submit)="sendMessage($event)" class="flex gap-2">
          <input 
            type="text" 
            [(ngModel)]="userInput" 
            name="userInput"
            placeholder="Escribe tu consulta..." 
            class="flex-1 bg-mono-950 border-2 border-mono-100 p-3 text-mono-100 outline-none focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
          <button type="submit" class="bg-mono-100 text-mono-950 p-3 brutalist-border hover:bg-mono-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .brutalist-border-sm {
      box-shadow: 3px 3px 0px 0px rgba(255,255,255,1);
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #ededed;
    }
  `]
})
export class Soporte {
  isOpen = false;
  userInput = '';
  messages = [
    { text: '¡Hola! Bienvenido a casarhoades. ¿En qué puedo ayudarte hoy?', isBot: true, time: '10:00' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (!this.userInput.trim()) return;

    // User Message
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    this.messages.push({
      text: this.userInput,
      isBot: false,
      time: timeStr
    });

    const userQuery = this.userInput.toLowerCase();
    this.userInput = '';

    // Bot Response (Simulated)
    setTimeout(() => {
      let response = 'Lo siento, no entiendo tu consulta. ¿Podrías reformularla?';
      
      if (userQuery.includes('horario') || userQuery.includes('abierto')) {
        response = 'Nuestro horario de atención en AV. Laprida es de Lunes a Sábados de 09:00 a 20:00.';
      } else if (userQuery.includes('envio') || userQuery.includes('despacho')) {
        response = 'Realizamos envíos a todo el país. El costo depende de tu ubicación y el tamaño del producto.';
      } else if (userQuery.includes('pago') || userQuery.includes('cuotas')) {
        response = 'Aceptamos transferencias (10% OFF), tarjetas de crédito hasta 12 cuotas y Mercado Pago.';
      } else if (userQuery.includes('hola')) {
        response = '¡Hola! Soy el asistente virtual de casarhoades. ¿Buscas repuestos para tu RV o herramientas para tu patio?';
      }

      this.messages.push({
        text: response,
        isBot: true,
        time: timeStr
      });
    }, 800);
  }
}
