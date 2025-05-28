import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./view/home/home.component";
import { HeaderComponent } from "./component/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProfessionalProfile';
}
