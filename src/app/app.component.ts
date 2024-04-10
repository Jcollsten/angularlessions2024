import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lession4Component } from './lession4/lession4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lession4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularlessions2024';
}
//
