import { Component } from '@angular/core';
import { HomeMain } from './Main';
import { HomeWho } from './Who';
import { HomeSlogans } from './Slogans';
import { HomeTimeline } from './Timeline';
import { HomeTop } from './Top';
import { HomeEvents } from './Events';
import { HomePays } from './Pays';
import { HomeCarrousel } from './Carrousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeMain,
    HomeWho,
    HomeSlogans,
    HomeTimeline,
    HomeTop,
    HomeEvents,
    HomePays,
    HomeCarrousel
  ],
  template: `
    <app-home-main></app-home-main>
    <app-home-who></app-home-who>
    <app-home-slogans></app-home-slogans>
    <app-home-timeline></app-home-timeline>
    <app-home-carrousel></app-home-carrousel>
    <app-home-top></app-home-top>
    <app-home-events></app-home-events>
    <app-home-pays></app-home-pays>
  `
})
export class Home {}
