import { Component } from '@angular/core';
import { Header } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {}
