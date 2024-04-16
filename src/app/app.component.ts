import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lession4Component } from './lession4/lession4.component';
import { Lession3Component } from './lession3/lession3.component';
import { Lession5Component } from './lession5/lession5.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Lession4Component,
    Lession3Component,
    Lession5Component,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularlessions2024';
}
//
