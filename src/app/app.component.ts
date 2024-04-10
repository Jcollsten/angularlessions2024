import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lession4Component } from './lession4/lession4.component';
import { Lession3Component } from './lession3/lession3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lession4Component, Lession3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularlessions2024';
}
//
