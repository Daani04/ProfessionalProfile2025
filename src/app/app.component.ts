import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./view/home/home.component";
import { HeaderComponent } from "./component/header/header.component";
import { trigger, transition, style, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    //Animaciones entre paginas
    animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateY(0)' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ 
              opacity: 0, 
              transform: 'translateY(100%)' 
            }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ 
              opacity: 1, 
              transform: 'translateY(0)' 
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})  
export class AppComponent {
  title = 'ProfessionalProfile';

  //Parte de las animaciones 
   prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
