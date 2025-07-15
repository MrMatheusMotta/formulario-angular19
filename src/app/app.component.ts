import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormcontatoComponent } from './formcontato/formcontato/formcontato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
