import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Soporte } from './components/Soporte';
import { ThreeBackground } from './components/ThreeBackground';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Soporte, ThreeBackground],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CasaRhoades');
}
